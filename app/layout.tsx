import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { ContactModalProvider } from "@/components/landing/contact-modal-context";
import "./globals.css";

const clashDisplay = localFont({
  src: [
    { path: "./fonts/ClashDisplay-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ClashDisplay-Semibold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ClashDisplay-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KAYITS — AI Data, Research & Remote Workforce Solutions",
    template: "%s · KAYITS",
  },
  description:
    "AI data annotation, survey research, transcription, remote workforce management, software development and automation solutions for businesses that need to scale.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${clashDisplay.variable} ${satoshi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
