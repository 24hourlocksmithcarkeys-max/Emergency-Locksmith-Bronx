interface TelegramBindings {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

interface PagesFunctionContext {
  request: Request;
  env: TelegramBindings;
}

interface LeadPayload {
  formType: string;
  name: string;
  phone: string;
  service: string;
  message: string;
  sourcePath: string;
}

interface RateLimitBucket {
  count: number;
  expiresAt: number;
}

const MAX_BODY_BYTES = 16_000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;
const rateLimitBuckets = new Map<string, RateLimitBucket>();
const allowedFormTypes = new Set([
  "Booking",
  "Quote",
  "Reserva (formulario en español)",
  "Consulta de cotización (español)",
]);

function jsonResponse(body: Record<string, unknown>, status = 200, extraHeaders: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      ...extraHeaders,
    },
  });
}

function singleLine(value: unknown, maxLength: number, minLength = 1): string | null {
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/[\r\n\t]+/g, " ").trim();
  return cleaned.length >= minLength && cleaned.length <= maxLength ? cleaned : null;
}

function multiline(value: unknown, maxLength: number): string | null {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return null;
  const cleaned = value.replace(/\r\n?/g, "\n").trim();
  return cleaned.length <= maxLength ? cleaned : null;
}

function validSourcePath(value: unknown): string | null {
  const path = singleLine(value, 512);
  if (!path || !path.startsWith("/") || path.startsWith("//") || path.includes("?") || path.includes("#")) {
    return null;
  }
  return path;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, entry] of rateLimitBuckets) {
    if (entry.expiresAt <= now) rateLimitBuckets.delete(key);
  }

  const bucket = rateLimitBuckets.get(ip);
  if (!bucket || bucket.expiresAt <= now) {
    rateLimitBuckets.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
  } else {
    bucket.count += 1;
    if (bucket.count > RATE_LIMIT_MAX_REQUESTS) return true;
  }

  while (rateLimitBuckets.size > 2_000) {
    const oldestKey = rateLimitBuckets.keys().next().value;
    if (oldestKey === undefined) break;
    rateLimitBuckets.delete(oldestKey);
  }

  return false;
}

function validatePayload(value: unknown): LeadPayload | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  const formType = singleLine(input.formType, 100);
  const name = singleLine(input.name, 100, 2);
  const phone = singleLine(input.phone, 40, 7);
  const service = singleLine(input.service, 120, 2);
  const message = multiline(input.message, 3_000);
  const sourcePath = validSourcePath(input.sourcePath);

  if (
    !formType ||
    !allowedFormTypes.has(formType) ||
    !name ||
    !phone ||
    !service ||
    message === null ||
    !sourcePath
  ) {
    return null;
  }

  return { formType, name, phone, service, message, sourcePath };
}

export async function onRequestPost({ request, env }: PagesFunctionContext): Promise<Response> {
  const origin = request.headers.get("Origin");
  if (!origin || origin !== new URL(request.url).origin) {
    return jsonResponse({ success: false, error: "Unable to submit this request." }, 403);
  }

  const contentType = request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return jsonResponse({ success: false, error: "Unable to submit this request." }, 415);
  }

  const reportedLength = Number(request.headers.get("Content-Length") || 0);
  if (reportedLength > MAX_BODY_BYTES) {
    return jsonResponse({ success: false, error: "Unable to submit this request." }, 413);
  }

  const clientIp = request.headers.get("CF-Connecting-IP");
  if (clientIp && isRateLimited(clientIp)) {
    return jsonResponse(
      { success: false, error: "Please wait a moment before trying again." },
      429,
      { "Retry-After": "60" },
    );
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return jsonResponse({ success: false, error: "Unable to submit this request." }, 400);
  }
  if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
    return jsonResponse({ success: false, error: "Unable to submit this request." }, 413);
  }

  let parsedBody: unknown;
  try {
    parsedBody = JSON.parse(rawBody);
  } catch {
    return jsonResponse({ success: false, error: "Unable to submit this request." }, 400);
  }

  const lead = validatePayload(parsedBody);
  if (!lead) {
    return jsonResponse({ success: false, error: "Please check the form and try again." }, 400);
  }

  const token = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return jsonResponse({ success: false, error: "Unable to send your request right now." }, 503);
  }

  const telegramMessage = [
    "NEW LEAD: Emergency Locksmith Bronx",
    `Form: ${lead.formType}`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Service: ${lead.service}`,
    `Page: ${lead.sourcePath}`,
    "",
    "Message:",
    lead.message || "(none)",
  ].join("\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8_000);
  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text: telegramMessage }),
      signal: controller.signal,
    });
    const telegramResult = (await telegramResponse.json().catch(() => null)) as { ok?: unknown } | null;
    if (!telegramResponse.ok || telegramResult?.ok !== true) {
      return jsonResponse({ success: false, error: "Unable to send your request right now." }, 502);
    }

    return jsonResponse({ success: true });
  } catch {
    return jsonResponse({ success: false, error: "Unable to send your request right now." }, 502);
  } finally {
    clearTimeout(timeout);
  }
}
