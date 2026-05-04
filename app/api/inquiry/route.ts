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

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        message: `Inquiry routing is not configured yet. Please email ${site.contact.email} directly.`
      },
      { status: 503 }
    );
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? `R3LIA Realty <noreply@r3liarealty.com>`;
  const toEmail = process.env.INQUIRY_TO_EMAIL ?? site.contact.email;

  const subject = `[R3LIA] ${inquiryIntent ?? "Inquiry"} — ${fullName} (${inquiryRole ?? "Unknown"})`;

  const emailText = [
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

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text: emailText
    })
  });

  if (!resendRes.ok) {
    return NextResponse.json(
      {
        message: `Inquiry routing failed. Please email ${site.contact.email} directly.`
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
