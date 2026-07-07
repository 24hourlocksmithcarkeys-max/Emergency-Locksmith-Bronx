import { NextResponse } from 'next/server';

interface LeadData {
  formType: string;
  name: string;
  phone: string;
  service: string;
  message?: string;
  sourceUrl: string;
}

export async function POST(request: Request) {
  try {
    const data: LeadData = await request.json();
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const siteSignature = process.env.SITE_SIGNATURE || 'EmergencyLocksmithBronx_CF';

    if (!botToken || !chatId) {
      return NextResponse.json({ success: false, error: 'Configuration error' }, { status: 500 });
    }

    const messageText = `🚀 NEW LEAD: ${siteSignature}
Form: ${data.formType}
Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message || 'N/A'}
URL: ${data.sourceUrl}`;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Telegram API Error:', errText);
      return NextResponse.json({ success: false, error: 'Failed to send lead to Telegram' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}