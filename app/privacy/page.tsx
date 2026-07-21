import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how ADYNTIQ collects, uses, protects, and shares information submitted through adyntiq.com.",
  alternates: {
    canonical: "/privacy"
  }
};

const externalLinkProps = {
  target: "_blank",
  rel: "noreferrer"
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="This policy explains what information ADYNTIQ collects through this website, why we use it, and the choices available to you."
      effectiveDate="July 21, 2026"
    >
      <section>
        <h2>1. Scope</h2>
        <p>
          This Privacy Policy applies to adyntiq.com and the contact form and
          related communications available through the website (collectively,
          the “Site”). In this policy, “ADYNTIQ,” “we,” “us,” and “our” refer to
          the operator of the Site.
        </p>
      </section>

      <section>
        <h2>2. Information we collect</h2>
        <h3>Information you provide</h3>
        <p>
          When you submit the contact form or communicate with us, we may
          collect your name, work email address, company name, service interest,
          message, and any other information you choose to provide.
        </p>
        <p>
          Please do not submit passwords, financial account information,
          government identification numbers, health information, or other highly
          sensitive data through the contact form.
        </p>

        <h3>Technical and usage information</h3>
        <p>
          Our hosting and security providers may process technical information
          needed to deliver and protect the Site, such as IP address, browser and
          device details, request time, requested pages, referring page, and
          security signals.
        </p>
        <p>
          We use Vercel Web Analytics to understand aggregate Site usage. It may
          report page paths, referrers, approximate geographic location, browser,
          operating system, and device type. Vercel states that its Web Analytics
          records anonymous, aggregated data and does not use third-party cookies.
        </p>
      </section>

      <section>
        <h2>3. How we use information</h2>
        <p>We use information to:</p>
        <ul>
          <li>respond to inquiries and communicate about requested services;</li>
          <li>evaluate potential projects and prepare for a business relationship;</li>
          <li>operate, secure, troubleshoot, and improve the Site;</li>
          <li>understand aggregate traffic and Site performance;</li>
          <li>prevent spam, fraud, abuse, and other malicious activity; and</li>
          <li>comply with law and protect our rights and the rights of others.</li>
        </ul>
        <p>
          We do not add you to a marketing mailing list merely because you submit
          the contact form. Where applicable, our legal bases may include taking
          steps at your request, our legitimate interests in operating and
          securing the Site and responding to business inquiries, consent, and
          compliance with legal obligations.
        </p>
      </section>

      <section>
        <h2>4. How we share information</h2>
        <p>
          We share information only as reasonably necessary for the purposes
          described in this policy, including with these service providers:
        </p>
        <ul>
          <li>
            <a href="https://vercel.com/legal/privacy-policy" {...externalLinkProps}>
              Vercel
            </a>{" "}
            for website hosting, delivery, and privacy-focused Web Analytics.
          </li>
          <li>
            <a
              href="https://www.cloudflare.com/turnstile-privacy-policy/"
              {...externalLinkProps}
            >
              Cloudflare Turnstile
            </a>{" "}
            for bot detection and contact-form security. Turnstile evaluates
            signals such as IP address, browser and network characteristics,
            user-agent information, and the Site origin.
          </li>
          <li>
            <a href="https://resend.com/legal/privacy-policy" {...externalLinkProps}>
              Resend
            </a>{" "}
            for securely transmitting contact-form submissions to our business
            email inbox.
          </li>
        </ul>
        <p>
          We may also disclose information to professional advisers, authorities,
          or other parties when reasonably necessary to comply with law, protect
          rights and safety, investigate misuse, or complete a business
          reorganization or transfer.
        </p>
        <p>
          We do not sell or rent personal information, and we do not share it for
          cross-context behavioral advertising.
        </p>
      </section>

      <section>
        <h2>5. Analytics, cookies, and security technologies</h2>
        <p>
          We do not use advertising cookies on the Site. Vercel Web Analytics is
          designed to provide aggregated statistics without third-party cookies.
          Cloudflare Turnstile uses security signals and may use technologies that
          Cloudflare considers strictly necessary to distinguish people from bots
          and prevent abuse. Your browser settings may let you control cookies,
          but disabling necessary technologies can prevent the contact form from
          working correctly.
        </p>
      </section>

      <section>
        <h2>6. Data retention</h2>
        <p>
          We retain contact inquiries and related communications only for as long
          as reasonably necessary to respond, evaluate or provide services,
          maintain appropriate business records, resolve disputes, enforce
          agreements, and meet legal obligations. Security and analytics data is
          retained according to the applicable provider’s settings and policies.
        </p>
      </section>

      <section>
        <h2>7. International processing</h2>
        <p>
          We and our service providers may process information in the United
          States and other countries. Those locations may have data protection
          laws that differ from the laws where you live. Where required, service
          providers use appropriate safeguards for international transfers.
        </p>
      </section>

      <section>
        <h2>8. Your choices and privacy rights</h2>
        <p>
          Depending on where you live and subject to applicable exceptions, you
          may have rights to request access to, correction of, deletion of, or a
          copy of your personal information, or to object to or restrict certain
          processing. You may also withdraw consent where processing relies on
          consent.
        </p>
        <p>
          To make a request, email{" "}
          <a href="mailto:sales@adyntiq.com">sales@adyntiq.com</a>. We may need
          to verify your identity before completing a request. You may also have
          the right to contact your local privacy regulator.
        </p>
      </section>

      <section>
        <h2>9. Data security</h2>
        <p>
          We use reasonable administrative, technical, and organizational
          safeguards designed to protect information. However, no method of
          transmission or storage is completely secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section>
        <h2>10. Children’s privacy</h2>
        <p>
          The Site is intended for business users and is not directed to children
          under 16. We do not knowingly collect personal information from
          children through the Site. If you believe a child has provided personal
          information, please contact us so we can review and delete it as
          appropriate.
        </p>
      </section>

      <section>
        <h2>11. External links</h2>
        <p>
          The Site may link to websites operated by others. Their privacy
          practices are governed by their own policies, and we are not responsible
          for those practices.
        </p>
      </section>

      <section>
        <h2>12. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy as our practices or legal obligations
          change. We will post the revised policy on this page and update the
          effective date. Material changes may also be highlighted on the Site.
        </p>
      </section>

      <section>
        <h2>13. Contact us</h2>
        <p>
          Questions or privacy requests may be sent to{" "}
          <a href="mailto:sales@adyntiq.com">sales@adyntiq.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
