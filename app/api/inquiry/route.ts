import { NextRequest, NextResponse } from "next/server";
import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const {
    fullName,
    email,
    phone,
    inquiryRole,
    inquiryIntent,
    preferredShowingWindow,
    message,
    companyWebsite,
    sourcePage
  } = body;

  // Honeypot — silently succeed if filled
  if (companyWebsite) {
    return NextResponse.json({ ok: true });
  }

  if (!fullName || !email) {
    return NextResponse.json({ message: "Name and email are required." }, { status: 400 });
  }

  const token =
    process.env.POSTMARK_SERVER_TOKEN ?? process.env.POSTMARK_API_KEY;

  if (!token) {
    return NextResponse.json(
      {
        message: `Inquiry routing is not configured yet. Please email ${site.contact.email} directly.`
      },
      { status: 503 }
    );
  }

  const fromEmail =
    process.env.POSTMARK_FROM_EMAIL ?? `R3LIA Realty <jp@r3liarealty.com>`;
  const toEmail = process.env.INQUIRY_TO_EMAIL ?? site.contact.email;
  const messageStream = process.env.POSTMARK_MESSAGE_STREAM ?? "outbound";

  const subject = `[R3LIA] ${inquiryIntent ?? "Inquiry"} — ${fullName} (${inquiryRole ?? "Unknown"})`;

  const textBody = [
    `Source: ${sourcePage || "Website"}`,
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Inquiry Role: ${inquiryRole || "—"}`,
    `Inquiry Intent: ${inquiryIntent || "—"}`,
    `Preferred Showing Window: ${preferredShowingWindow || "—"}`,
    "",
    "Message:",
    message || "—"
  ].join("\n");

  const htmlBody = `
<table style="font-family:sans-serif;font-size:14px;color:#322a25;max-width:600px;width:100%">
  <tr><td style="padding:0 0 8px"><strong>Source:</strong> ${sourcePage || "Website"}</td></tr>
  <tr><td style="padding:0 0 8px"><strong>Name:</strong> ${fullName}</td></tr>
  <tr><td style="padding:0 0 8px"><strong>Email:</strong> ${email}</td></tr>
  <tr><td style="padding:0 0 8px"><strong>Phone:</strong> ${phone || "—"}</td></tr>
  <tr><td style="padding:0 0 8px"><strong>Inquiry Role:</strong> ${inquiryRole || "—"}</td></tr>
  <tr><td style="padding:0 0 8px"><strong>Inquiry Intent:</strong> ${inquiryIntent || "—"}</td></tr>
  <tr><td style="padding:0 0 8px"><strong>Preferred Showing Window:</strong> ${preferredShowingWindow || "—"}</td></tr>
  <tr><td style="padding:16px 0 4px"><strong>Message:</strong></td></tr>
  <tr><td style="padding:0;white-space:pre-wrap">${message || "—"}</td></tr>
</table>
`.trim();

  const postmarkRes = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": token
    },
    body: JSON.stringify({
      From: fromEmail,
      To: toEmail,
      Subject: subject,
      HtmlBody: htmlBody,
      TextBody: textBody,
      ReplyTo: email,
      MessageStream: messageStream
    })
  });

  if (!postmarkRes.ok) {
    return NextResponse.json(
      {
        message: `Inquiry routing failed. Please email ${site.contact.email} directly.`
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
