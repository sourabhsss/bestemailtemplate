import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "575 Free HTML Email Templates | Best Email Template",
    template: "%s | Best Email Template"
  },
  description: "Mobile responsive, customizable HTML email templates built on Figma for various use cases across industries. 575+ free templates for marketing, transactional, and newsletter emails.",
  keywords: ["HTML email templates", "email templates", "responsive email templates", "free email templates", "Figma email templates"],
  authors: [{ name: "Best Email Template" }],
  creator: "Best Email Template",
  publisher: "Best Email Template",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestemailtemplate.com",
    siteName: "Best Email Template",
    title: "575 Free HTML Email Templates | Best Email Template",
    description: "Mobile responsive, customizable HTML email templates built on Figma for various use cases across industries.",
  },
  twitter: {
    card: "summary_large_image",
    title: "575 Free HTML Email Templates | Best Email Template",
    description: "Mobile responsive, customizable HTML email templates built on Figma for various use cases across industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
