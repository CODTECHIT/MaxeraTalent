"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type RevealAnimation = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  animation?: RevealAnimation;
  /**
   * Delay in ms for staggered animations
   */
  delayMs?: number;
  /**
   * Threshold for IntersectionObserver (0-1)
   */
  threshold?: number;
  /**
   * Root margin for triggering animation
   */
  rootMargin?: string;
};

export default function Reveal({
  children,
  className,
  animation = "fade-up",
  delayMs = 0,
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  const animationMap: Record<RevealAnimation, string> = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "slide-left": "animate-slide-in-left",
    "slide-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "opacity-0",
        isVisible && animationMap[animation],
        className
      )}
      style={delayMs ? { animationDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}

