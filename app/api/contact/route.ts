import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type TurnstileVerification = {
  success: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

const allowedProductionHostnames = new Set(["adyntiq.com", "www.adyntiq.com"]);

async function verifyTurnstile(
  token: string,
  secret: string,
  remoteIp?: string
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);

  try {
    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          response: token,
          remoteip: remoteIp
        }),
        cache: "no-store",
        signal: controller.signal
      }
    );

    if (!verificationResponse.ok) {
      throw new Error(`Turnstile returned ${verificationResponse.status}.`);
    }

    return (await verificationResponse.json()) as TurnstileVerification;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, need, message, website, turnstileToken } = body;

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof need !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !need.trim() ||
      !message.trim() ||
      name.length > 100 ||
      email.length > 254 ||
      need.length > 100 ||
      message.length > 5000 ||
      (company != null &&
        (typeof company !== "string" || company.length > 200))
    ) {
      return NextResponse.json(
        { error: "Please check the required fields and try again." },
        { status: 400 }
      );
    }

    const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (Boolean(turnstileSiteKey) !== Boolean(turnstileSecret)) {
      console.error("Turnstile is missing a site key or secret key.");
      return NextResponse.json(
        { error: "Form protection is temporarily unavailable." },
        { status: 503 }
      );
    }

    if (turnstileSiteKey && turnstileSecret) {
      if (
        typeof turnstileToken !== "string" ||
        !turnstileToken ||
        turnstileToken.length > 2048
      ) {
        return NextResponse.json(
          { error: "Please complete the security check and try again." },
          { status: 403 }
        );
      }

      const remoteIp =
        req.headers.get("cf-connecting-ip") ||
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        undefined;

      let verification: TurnstileVerification;

      try {
        verification = await verifyTurnstile(
          turnstileToken,
          turnstileSecret,
          remoteIp
        );
      } catch (error) {
        console.error(
          "Turnstile validation request failed:",
          error instanceof Error ? error.message : "Unknown error"
        );
        return NextResponse.json(
          { error: "Security verification is temporarily unavailable." },
          { status: 503 }
        );
      }

      const hostnameIsAllowed =
        process.env.NODE_ENV !== "production" ||
        (verification.hostname != null &&
          allowedProductionHostnames.has(verification.hostname));
      const actionIsAllowed =
        process.env.NODE_ENV !== "production" ||
        verification.action === "contact";

      if (
        !verification.success ||
        !actionIsAllowed ||
        !hostnameIsAllowed
      ) {
        console.warn("Turnstile rejected a contact submission.", {
          action: verification.action,
          hostname: verification.hostname,
          errors: verification["error-codes"]
        });
        return NextResponse.json(
          { error: "Security verification failed. Please try again." },
          { status: 403 }
        );
      }
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
      subject: `New ADYNTIQ inquiry from ${name.replace(/[\r\n]+/g, " ").trim()}`,
      replyTo: email.trim(),
      text: `
Name: ${name.trim()}
Email: ${email.trim()}
Company: ${company?.trim() || "Not provided"}
Service: ${need.trim()}

Message:
${message.trim()}
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
