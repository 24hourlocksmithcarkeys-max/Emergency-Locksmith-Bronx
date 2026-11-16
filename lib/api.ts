export interface TelegramLeadInput {
  formType: string;
  name: string;
  phone: string;
  service: string;
  message?: string;
}

interface TelegramLeadResponse {
  success?: boolean;
  error?: string;
}

export async function sendTelegramLead(data: TelegramLeadInput) {
  try {
    const response = await fetch("/api/telegram-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      cache: "no-store",
      body: JSON.stringify({
        ...data,
        sourcePath: typeof window === "undefined" ? "/" : window.location.pathname,
      }),
    });

    const result = (await response.json().catch(() => null)) as TelegramLeadResponse | null;
    if (!response.ok || result?.success !== true) {
      return {
        success: false,
        error: typeof result?.error === "string" ? result.error : "Unable to send your request right now.",
      };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Unable to send your request right now." };
  }
}
