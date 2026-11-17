"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lock,
  Play,
  Code2,
  FolderGit2,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface RoadmapStepData {
  id: string;
  order: number;
  title: string;
  description: string;
  type: string;
  status: string; // COMPLETED, IN_PROGRESS, LOCKED
  points: number;
  score?: number | null;
  badgeText?: string;
  skillsGained?: string[];
}

interface RoadmapNodeProps {
  step: RoadmapStepData;
  isLast?: boolean;
  onSelect?: (step: RoadmapStepData) => void;
  index: number;
}

export function RoadmapNode({
  step,
  isLast = false,
  onSelect,
  index,
}: RoadmapNodeProps) {
  const isCompleted = step.status === "COMPLETED";
  const isInProgress = step.status === "IN_PROGRESS";
  const isLocked = step.status === "LOCKED";

  const typeIcon = {
    SKILL_CHECK: <Code2 className="w-4 h-4 text-cyan-400" />,
    PROJECT: <FolderGit2 className="w-4 h-4 text-[#7C5CFF]" />,
    AUDIT: <Award className="w-4 h-4 text-amber-400" />,
  }[step.type] || <Sparkles className="w-4 h-4 text-indigo-400" />;

  return (
    <div className="relative flex items-start gap-4 sm:gap-6 group">
      {/* Left Node Indicator & Timeline Connector */}
      <div className="relative flex flex-col items-center shrink-0">
        <motion.div
          whileHover={{ scale: 1.15 }}
          onClick={() => onSelect?.(step)}
          className={cn(
            "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg z-10",
            isCompleted &&
              "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white shadow-emerald-500/30 border-2 border-emerald-300",
            isInProgress &&
              "bg-gradient-to-br from-[#7C5CFF] to-[#22D3EE] text-white shadow-[0_0_25px_rgba(124,92,255,0.6)] border-2 border-cyan-300 animate-pulse",
            isLocked &&
              "bg-white/[0.05] text-slate-500 border border-white/10"
          )}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-6 h-6 text-white stroke-[2.5]" />
          ) : isInProgress ? (
            <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
          ) : (
            <Lock className="w-5 h-5 text-slate-500" />
          )}
        </motion.div>

        {/* Vertical Connecting Line */}
        {!isLast && (
          <div
            className={cn(
              "w-1 h-24 sm:h-28 rounded-full my-2 transition-all duration-300",
              isCompleted
                ? "bg-gradient-to-b from-cyan-500 to-[#7C5CFF]"
                : "bg-white/10"
            )}
          />
        )}
      </div>

      {/* Right Content Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        onClick={() => onSelect?.(step)}
        className={cn(
          "flex-1 p-5 sm:p-6 rounded-3xl transition-all duration-300 cursor-pointer border mb-6",
          isInProgress &&
            "bg-gradient-to-r from-[#181832] to-[#121226] border-cyan-400/50 shadow-[0_0_35px_-5px_rgba(34,211,238,0.25)]",
          isCompleted &&
            "bg-white/[0.03] border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.05]",
          isLocked &&
            "bg-white/[0.015] border-white/5 opacity-70 hover:opacity-90"
        )}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-white/5 border border-white/10">
              {typeIcon}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
              Step {step.order} • {step.type.replace("_", " ")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {step.badgeText && (
              <span
                className={cn(
                  "text-xs font-bold px-2.5 py-0.5 rounded-full border",
                  isCompleted && "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
                  isInProgress && "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
                  isLocked && "bg-white/5 border-white/10 text-slate-400"
                )}
              >
                {step.badgeText}
              </span>
            )}
            <span className="text-xs font-mono font-bold text-amber-400">
              +{step.points} XP
            </span>
          </div>
        </div>

        <h4 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
          {step.title}
        </h4>
        <p className="text-sm text-slate-400 mt-1 leading-relaxed">
          {step.description}
        </p>

        {step.skillsGained && step.skillsGained.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-white/[0.06]">
            {step.skillsGained.map((sk) => (
              <span
                key={sk}
                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
              >
                {sk}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-end gap-1 mt-3 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
          <span>{isInProgress ? "Continue Step" : isCompleted ? "Review Audit" : "Preview Details"}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </motion.div>
    </div>
  );
}
