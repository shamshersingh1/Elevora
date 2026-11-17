"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glow?: "none" | "violet" | "cyan" | "magenta" | "gold";
  hoverEffect?: boolean;
  className?: string;
  gradientBorder?: boolean;
}

export function GlassCard({
  children,
  glow = "none",
  hoverEffect = true,
  className,
  gradientBorder = false,
  ...props
}: GlassCardProps) {
  const glowStyles = {
    none: "",
    violet: "shadow-[0_0_40px_-10px_rgba(124,92,255,0.3)] border-indigo-500/30",
    cyan: "shadow-[0_0_35px_-8px_rgba(34,211,238,0.3)] border-cyan-500/30",
    magenta: "shadow-[0_0_40px_-10px_rgba(232,121,249,0.3)] border-pink-500/30",
    gold: "shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] border-amber-500/30",
  }[glow];

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "relative rounded-3xl backdrop-blur-xl transition-all duration-300",
        "bg-[#121224]/75 border border-white/[0.08] text-white",
        "light:bg-white/90 light:text-slate-900 light:border-slate-200/80 light:shadow-xl light:shadow-slate-200/50",
        glowStyles,
        gradientBorder &&
          "before:absolute before:-inset-[1px] before:rounded-3xl before:bg-gradient-to-r before:from-[#7C5CFF]/40 before:via-[#22D3EE]/30 before:to-[#E879F9]/40 before:-z-10 before:content-['']",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
