import type { ReactNode, HTMLProps } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div className={cn("relative w-full min-h-screen", className)} {...props}>
        {/* Lightweight static background */}
        <div
          className="fixed inset-0 -z-20 pointer-events-none"
          style={{
            background: showRadialGradient
              ? `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.22), transparent 35%),
                radial-gradient(circle at 80% 10%, rgba(168, 85, 247, 0.20), transparent 35%),
                radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.16), transparent 40%),
                #020617
              `
              : "#020617",
          }}
          aria-hidden="true"
        />

        {/* Simple readability overlay */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none bg-black/30"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
};