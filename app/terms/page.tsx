import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the ADYNTIQ website.",
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsOfUsePage() {
  return (
    <LegalPage
      title="Terms of Use"
      summary="These terms govern your access to and use of adyntiq.com. Please read them before using the website."
      effectiveDate="July 21, 2026"
    >
      <section>
        <h2>1. Acceptance of these terms</h2>
        <p>
          By accessing or using adyntiq.com (the “Site”), you agree to these Terms
          of Use and our Privacy Policy. If you do not agree, please do not use the
          Site. “ADYNTIQ,” “we,” “us,” and “our” refer to the operator of the Site.
        </p>
      </section>

      <section>
        <h2>2. Purpose of the Site</h2>
        <p>
          The Site provides general information about ADYNTIQ and our AI strategy,
          automation, agent, data integration, implementation, and operations
          transformation services. Site content is for general informational and
          business-development purposes only.
        </p>
        <p>
          Using the Site, contacting us, or submitting an inquiry does not create
          a client, advisory, fiduciary, partnership, or other professional
          relationship. Any services will be governed by a separate written
          agreement signed by the relevant parties.
        </p>
      </section>

      <section>
        <h2>3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>use the Site in violation of law or the rights of others;</li>
          <li>attempt to gain unauthorized access to the Site or related systems;</li>
          <li>interfere with the Site’s operation, availability, or security;</li>
          <li>introduce malicious code or use automated tools to abuse the Site;</li>
          <li>misrepresent your identity or submit fraudulent information; or</li>
          <li>copy, scrape, or exploit Site content except as permitted by law.</li>
        </ul>
      </section>

      <section>
        <h2>4. Intellectual property</h2>
        <p>
          The Site and its text, design, graphics, branding, logos, software, and
          other content are owned by or licensed to ADYNTIQ and are protected by
          intellectual property and other laws. Subject to these Terms, we grant
          you a limited, revocable, nonexclusive, nontransferable license to view
          and use the Site for legitimate personal or internal business purposes.
          No other rights are granted.
        </p>
      </section>

      <section>
        <h2>5. Inquiries and submitted content</h2>
        <p>
          You are responsible for the accuracy and legality of information you
          submit. You represent that you have the right to provide it and that our
          use of it to respond to your inquiry will not violate another person’s
          rights.
        </p>
        <p>
          Do not send trade secrets, regulated data, source code, credentials, or
          other confidential or highly sensitive information through the public
          contact form. Unless we have signed a separate confidentiality agreement,
          submitting information does not create a duty of confidentiality beyond
          the obligations described in our Privacy Policy and applicable law.
        </p>
      </section>

      <section>
        <h2>6. Third-party services and links</h2>
        <p>
          The Site may rely on or link to third-party services. We do not control
          third-party websites, content, terms, security, or privacy practices.
          Your use of third-party services is governed by their applicable terms
          and policies.
        </p>
      </section>

      <section>
        <h2>7. No warranties</h2>
        <p>
          To the fullest extent permitted by law, the Site and its content are
          provided “as is” and “as available,” without warranties of any kind,
          express or implied. We do not warrant that the Site will be uninterrupted,
          error-free, secure, or current, or that information on the Site will be
          complete or suitable for a particular purpose.
        </p>
        <p>
          Descriptions of potential AI, automation, or operational outcomes are
          illustrative and are not guarantees. Actual outcomes depend on data,
          systems, implementation, organizational readiness, and other factors.
        </p>
      </section>

      <section>
        <h2>8. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, ADYNTIQ and its owners,
          personnel, contractors, and service providers will not be liable for any
          indirect, incidental, special, consequential, exemplary, or punitive
          damages, or for loss of data, profits, revenue, business opportunity, or
          goodwill, arising from or related to use of or inability to use the Site.
        </p>
        <p>
          Where liability cannot be excluded, it will be limited to the greatest
          extent permitted by applicable law. Some jurisdictions do not allow
          certain exclusions or limitations, so portions of this section may not
          apply to you.
        </p>
      </section>

      <section>
        <h2>9. Site changes and availability</h2>
        <p>
          We may change, suspend, or discontinue any part of the Site at any time.
          We may also restrict access when reasonably necessary to protect the
          Site, users, or our rights.
        </p>
      </section>

      <section>
        <h2>10. Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. Revised Terms become
          effective when posted on this page unless a later date is stated. Your
          continued use of the Site after an update constitutes acceptance of the
          revised Terms.
        </p>
      </section>

      <section>
        <h2>11. Severability and waiver</h2>
        <p>
          If any provision of these Terms is found unenforceable, the remaining
          provisions will remain in effect. A failure to enforce a provision is
          not a waiver of the right to enforce it later.
        </p>
      </section>

      <section>
        <h2>12. Contact</h2>
        <p>
          Questions about these Terms may be sent to{" "}
          <a href="mailto:sales@adyntiq.com">sales@adyntiq.com</a>.
        </p>
      </section>
    </LegalPage>
  );
}
