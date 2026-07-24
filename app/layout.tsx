import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const sora = Sora({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-sora"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adyntiq.com"),

  title: {
    default: "ADYNTIQ | AI Consulting and Automation Services",
    template: "%s | ADYNTIQ"
  },

  description:
    "ADYNTIQ helps SMB and mid-market organizations transform operations through AI strategy, workflow automation, custom AI agents, data integration, implementation, and AI operations transformation.",

  keywords: [
    "AI consulting",
    "AI strategy",
    "workflow automation",
    "custom AI agents",
    "AI implementation",
    "data integration",
    "AI transformation",
    "SMB AI consulting",
    "mid-market AI consulting"
  ],

  authors: [{ name: "ADYNTIQ" }],
  creator: "ADYNTIQ",
  publisher: "ADYNTIQ",

  alternates: {
    canonical: "/"
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.adyntiq.com",
    siteName: "ADYNTIQ",
    title: "ADYNTIQ | AI Consulting That Delivers",
    description:
      "Transform your operations onto AI rails with AI strategy, workflow automation, custom agents, and data integration."
  },

  twitter: {
    card: "summary_large_image",
    title: "ADYNTIQ | AI Consulting That Delivers",
    description:
      "Practical AI strategy, automation, custom agents, and implementation for SMB and mid-market organizations."
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ADYNTIQ",
    url: "https://www.adyntiq.com",
    email: "sales@adyntiq.com",
    description:
      "AI professional services company helping SMB and mid-market organizations transform operations through AI strategy, automation, custom agents, data integration, and implementation.",
    areaServed: "United States",
    serviceType: [
      "AI Strategy",
      "Workflow Automation",
      "Custom AI Agents",
      "Data Integration",
      "AI Implementation",
      "AI Operations Transformation"
    ]
  };

  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
