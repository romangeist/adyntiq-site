import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, need, message } = body;

    if (!name || !email || !need || !message) {
      return NextResponse.json(
        { error: "Name, email, service, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "ADYNTIQ Website <website@adyntiq.com>",
      to: process.env.CONTACT_TO || "sales@adyntiq.com",
      subject: `New ADYNTIQ inquiry from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service: ${need}

Message:
${message}
      `
    });

    if (error) {
      console.error("Resend contact delivery failed:", error.message);
      return NextResponse.json(
        {
          error:
            "We couldn't send your message. Please email sales@adyntiq.com directly."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(
      "Unexpected contact form error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      {
        error:
          "We couldn't send your message. Please email sales@adyntiq.com directly."
      },
      { status: 500 }
    );
  }
}
