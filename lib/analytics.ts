/**
 * Minimal analytics helper.
 *
 * Only non-personal values belong in `params`: page paths, service categories,
 * form names, and link labels. Never pass a name, phone number, email address,
 * street address, or message body — those must stay in the lead delivery
 * channel (Telegram), not in Google Analytics or Clarity.
 */
export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

type AnalyticsWindow = Window & {
  dataLayer?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
};

export function trackEvent(name: string, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;

  const analyticsWindow = window as AnalyticsWindow;

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", name, params);
    return;
  }

  // gtag.js is loaded after hydration. Queue the event so it is still
  // processed once the library initialises.
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.dataLayer.push({ event: name, ...params });
}
