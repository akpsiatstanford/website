import type { Metadata } from "next";
import Link from "next/link";
import { Instrument_Sans, Newsreader } from "next/font/google";
import SiteHeader from "./_components/SiteHeader";
import "./globals.css";

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz"],
});

const sans = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stanford AKPsi",
  description: "Alpha Kappa Psi at Stanford University.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <div id="content" className="page">
          {children}
        </div>
        <footer className="site-footer">
          <span>© 2026 Alpha Kappa Psi, Pi Tau Chapter</span>
          <Link href="/contact">Get in touch!</Link>
        </footer>
      </body>
    </html>
  );
}
