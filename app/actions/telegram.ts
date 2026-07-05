"use server";

interface TelegramLeadData {
  formType: "Booking" | "Quote";
  name: string;
  phone: string;
  service: string;
  message?: string;
  sourceUrl: string;
}

export async function sendTelegramLead(data: TelegramLeadData) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const siteSignature = process.env.SITE_SIGNATURE || "EmergencyLocksmithBronx_CF";

  if (!botToken || !chatId) {
    console.error("Telegram bot token or chat ID is missing from environment variables.");
    return { success: false, error: "Configuration error" };
  }

  const messageText = `🚀 NEW LEAD: ${siteSignature}
Form: ${data.formType}
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message || "N/A"}
URL: ${data.sourceUrl}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Telegram API Error:", errText);
      return { success: false, error: "Failed to send lead to Telegram" };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
    return { success: false, error: "Internal server error" };
  }
}
