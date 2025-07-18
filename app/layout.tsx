// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";
import type { ReactNode } from "react";

export const metadata = {
  title: "Felix Cherian - Portfolio",
  description: "Aspiring Product Manager Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg text-text">
        <Header />
        {children}
      </body>
    </html>
  );
}
