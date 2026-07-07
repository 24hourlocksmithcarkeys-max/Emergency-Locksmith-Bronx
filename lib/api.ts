export async function sendTelegramLead(data: {
  formType: string;
  name: string;
  phone: string;
  service: string;
  message?: string;
  sourceUrl: string;
}) {
  try {
    const response = await fetch('/api/send-lead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Telegram API Error:', errText);
      return { success: false, error: 'Failed to send lead to Telegram' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return { success: false, error: 'Internal server error' };
  }
}