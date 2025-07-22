// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import type { ReactNode } from "react";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import ScrollProgressBar from "./components/ScrollProgressBar";
import Head from "next/head";

export const metadata = {
  title: "Felix Cherian - Portfolio",
  description: "Aspiring Product Manager Portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Felix Cherian - Portfolio</title>
        {/* SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Felix Cherian - Aspiring Product Manager. View my portfolio, projects, resume, and more." />
        <meta name="robots" content="index, follow" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Felix Cherian - Portfolio" />
        <meta property="og:description" content="Check out Felix’s product management projects and tech portfolio." />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || "https://felixcherian.com"}/og-image.jpg`} />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL || "https://felixcherian.com"} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Felix Cherian - Portfolio" />
        <meta name="twitter:description" content="Check out Felix’s product management projects and tech portfolio." />
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_SITE_URL || "https://felixcherian.com"}/og-image.jpg`} />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-bg text-white">
        <div className="relative w-full min-h-screen">
          <AuroraBackground>
            <div className="relative z-20">
              <ScrollToTopOnMount />
              <Header />
              <ScrollProgressBar />
              {children}
            </div>
          </AuroraBackground>
        </div>
      </body>
    </html>
  );
}
