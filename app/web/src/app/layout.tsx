import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SanityLive } from "@/sanity/live";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

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
    template: "%s | Ahmad Siddique Blogs",
    default: "Ahmad Siddique Blogs - Engineering, Design & Ergonomics",
  },
  description: "A publication exploring developer ergonomics, modern web engineering details, CMS architecture, and minimalist design systems by Ahmad Siddique.",
  metadataBase: new URL("https://ahmadsiddique.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ahmad Siddique Blogs - Engineering, Design & Ergonomics",
    description: "A publication exploring developer ergonomics, modern web engineering details, CMS architecture, and minimalist design systems by Ahmad Siddique.",
    url: "https://ahmadsiddique.dev",
    siteName: "Ahmad Siddique Blogs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Siddique Blogs - Engineering, Design & Ergonomics",
    description: "A publication exploring developer ergonomics, modern web engineering details, CMS architecture, and minimalist design systems by Ahmad Siddique.",
    creator: "@ahmadsiddique.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex dark flex-col bg-canvas text-body transition-colors duration-200">
        <Header />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
        <SanityLive />
      </body>
    </html>
  );
}
