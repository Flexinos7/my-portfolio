// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import type { ReactNode } from "react";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import { AuroraBackground } from "../components/ui/AuroraBackground";
import ScrollProgressBar from "./components/ScrollProgressBar";

export const metadata = {
  title: "Felix Cherian - Portfolio",
  description: "Aspiring Product Manager Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
