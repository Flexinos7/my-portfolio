"use client";
import React, { ReactNode, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  // Add scroll-based opacity for black overlay
  const { scrollYProgress } = useScroll();
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.5]);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return (
    <main>
      <div className={cn("relative w-full min-h-screen", className)} {...props}>
        {/* Faint black glassmorphism overlay for readability */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md -z-10 pointer-events-none" />
        {/* Aurora background stretched over the whole page */}
        <div
          className="fixed inset-0 -z-20 overflow-hidden"
          style={{
            "--aurora":
              "repeating-linear-gradient(120deg,#1e3a8a_0%,#312e81_25%,#7c3aed_50%,#db2777_75%,#0ea5e9_100%)",
            "--dark-gradient":
              "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
            "--white-gradient":
              "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
            "--blue-300": "#2563eb",
            "--blue-400": "#1e40af",
            "--blue-500": "#312e81",
            "--indigo-300": "#7c3aed",
            "--violet-200": "#a21caf",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent",
          } as React.CSSProperties}
        >
          {/* Example animated aurora layer for demo purposes */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
            transition={{ duration: isMobile ? 1 : 2, ease: "linear", repeat: Infinity }}
            style={{ zIndex: 1 }}
          />
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:150%,_150%] [background-position:50%_50%,50%_50%] opacity-50 blur-[4px] invert filter will-change-transform [--aurora:repeating-linear-gradient(120deg,#38bdf8_0%,#818cf8_20%,#f472b6_40%,#fde68a_60%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:150%,_150%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[''] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
          {/* Softer black tint overlay above aurora, below content */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none z-10" />
          {/* Scroll-based black fade overlay */}
          <motion.div
            className="fixed inset-0 pointer-events-none z-20"
            style={{ background: "#000", opacity: overlayOpacity }}
          />
        </div>
        {/* Content above backgrounds */}
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </main>
  );
}; 