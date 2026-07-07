import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const form = await request.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const company = String(form.get("company") || "");
  const need = String(form.get("need") || "");
  const message = String(form.get("message") || "");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  await resend.emails.send({
    from: process.env.CONTACT_FROM || "ADYNTIQ Website <onboarding@resend.dev>",
    to: process.env.CONTACT_TO || "sales@adyntiq.com",
    replyTo: email,
    subject: `New ADYNTIQ inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nNeed: ${need}\n\nMessage:\n${message}`
  });

  return new Response(null, { status: 303, headers: { Location: "/contact?sent=1" } });
}
