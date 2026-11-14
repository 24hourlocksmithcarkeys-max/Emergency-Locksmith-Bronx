"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

const CHANNELS: Array<{ prefix: string; event: string }> = [
  { prefix: "tel:", event: "click_to_call" },
  { prefix: "sms:", event: "click_to_text" },
  { prefix: "mailto:", event: "click_to_email" },
];

/**
 * One delegated listener captures every phone, text, and email action on the
 * site, including ones added later. This avoids converting server components
 * to client components just to attach an onClick handler.
 */
export default function ConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";
      const channel = CHANNELS.find((item) => href.startsWith(item.prefix));
      if (!channel) return;

      trackEvent(channel.event, {
        page_path: window.location.pathname,
        link_text: (anchor.textContent ?? "").trim().slice(0, 80),
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
