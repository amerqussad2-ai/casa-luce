import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/SkipLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Amer Kussad | Front-End Developer",
    template: "%s | Amer Kussad",
  },
  description:
    "Front-End Developer based in Ras Al Khaimah, UAE, building responsive web experiences with React, Next.js, TypeScript, and modern web technologies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex flex-1 flex-col outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
