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
        <title>Felix Cherian — Digital Product Manager & Portfolio</title>
        <meta name="description" content="Portfolio of Felix Cherian — product management, UX, and software projects." />
        <link rel="canonical" href="https://felixcherian.com" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Felix Cherian",
              "url": "https://felixcherian.com",
              "jobTitle": "Digital Product Manager",
              "sameAs": [
                "https://www.linkedin.com/in/felixcherian",
                "https://github.com/FelixCherian"
              ]
            }
          `}
        </script>
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
