import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "ADYNTIQ | AI Professional Services",
  description: "Transform your operations onto AI rails. ADYNTIQ designs and implements AI strategy, automation workflows, custom agents, and data integrations for SMB and mid-market teams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
