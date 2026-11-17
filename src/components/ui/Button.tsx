"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glow" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "left",
  isLoading = false,
  className,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs font-medium rounded-xl gap-1.5",
    md: "px-5 py-2.5 text-sm font-semibold rounded-2xl gap-2",
    lg: "px-6 py-3.5 text-base font-semibold rounded-2xl gap-2.5",
    xl: "px-8 py-4 text-lg font-bold rounded-2xl gap-3",
  }[size];

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#7C5CFF] via-[#6366F1] to-[#22D3EE] text-white shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/40 hover:opacity-95 border border-white/20",
    glow:
      "bg-gradient-to-r from-[#7C5CFF] via-[#22D3EE] to-[#E879F9] text-white shadow-[0_0_35px_rgba(124,92,255,0.45)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] border border-white/30",
    secondary:
      "bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/10 hover:border-cyan-400/30 backdrop-blur-md light:bg-slate-100 light:text-slate-900 light:hover:bg-slate-200",
    outline:
      "bg-transparent text-white border border-[#7C5CFF]/50 hover:border-[#22D3EE] hover:bg-[#7C5CFF]/10 light:text-slate-900 light:border-indigo-400 light:hover:bg-indigo-50",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.06] light:text-slate-600 light:hover:text-slate-900 light:hover:bg-slate-100",
    gold:
      "bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-600 text-slate-950 font-bold shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] border border-amber-300/40",
  }[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "relative inline-flex items-center justify-center transition-all duration-200 font-display cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none",
        sizeClasses,
        variantClasses,
        className
      )}
      {...props}
    >
      {isLoading ? (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          />
        </svg>
      ) : (
        icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </motion.button>
  );
}
