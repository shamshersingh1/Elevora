"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Share2,
  Zap,
  Lock,
  Flame,
  Award,
  Layers,
  Check,
  QrCode,
  Copy,
} from "lucide-react";
import { tokens, ProofTierLevel } from "@/styles/tokens";
import { truncateHash } from "@/lib/utils";
import Link from "next/link";

export interface ProofCardProps {
  interactive?: boolean;
  defaultTier?: ProofTierLevel;
  candidateName?: string;
  candidateUsername?: string;
  avatarUrl?: string;
  headline?: string;
  score?: number;
  verifiedHash?: string;
  verifiedSkills?: Array<{
    name: string;
    level: string;
    score: number;
    category: string;
  }>;
  projectsCount?: number;
  viewsCount?: number;
  className?: string;
  compact?: boolean;
}

export function ProofCard({
  interactive = true,
  defaultTier = "platinum",
  candidateName = "Alex Rivera",
  candidateUsername = "alexrivera",
  avatarUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  headline = "Full-Stack AI Systems Architect",
  score = 94,
  verifiedHash = "sha256:8f4a7c1b29d0e3a478c9e5b8a1f2349071cd8a12e345b89c7d01e4a56b7c89f0",
  verifiedSkills = [
    { name: "React 19 & Next.js App Router", level: "Platinum", score: 96, category: "Frontend" },
    { name: "TypeScript Advanced Metaprogramming", level: "Platinum", score: 94, category: "Frontend" },
    { name: "Vector Search & RAG Pipelines", level: "Platinum", score: 95, category: "AI / ML" },
    { name: "Distributed Systems & Kafka", level: "Gold", score: 89, category: "Backend" },
  ],
  projectsCount = 3,
  viewsCount = 14820,
  className = "",
  compact = false,
}: ProofCardProps) {
  const [currentTier, setCurrentTier] = useState<ProofTierLevel>(defaultTier);
  const [currentScore, setCurrentScore] = useState(score);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const tiers = tokens.colors.proofTiers;
  const activeTierConfig = tiers[currentTier];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 12,
      y: (x / rect.width) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const triggerLevelUp = (nextTier: ProofTierLevel) => {
    setCurrentTier(nextTier);
    const tierScores: Record<ProofTierLevel, number> = {
      bronze: 48,
      silver: 68,
      gold: 84,
      platinum: 94,
      diamond: 99,
    };
    setCurrentScore(tierScores[nextTier]);

    // Fire festive confetti!
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#7C5CFF", "#22D3EE", "#E879F9", "#F59E0B"],
    });
  };

  const copyVerificationLink = () => {
    navigator.clipboard?.writeText(`https://elevora.io/u/${candidateUsername}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Optional Interactive Level Switcher Pill for showcase mode */}
      {interactive && !compact && (
        <div className="flex items-center gap-1.5 p-1 mb-4 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
          {(["bronze", "silver", "gold", "platinum", "diamond"] as ProofTierLevel[]).map((t) => {
            const isSelected = currentTier === t;
            return (
              <button
                key={t}
                onClick={() => triggerLevelUp(t)}
                className={`px-3 py-1 text-xs font-bold rounded-xl transition-all duration-200 capitalize flex items-center gap-1 ${
                  isSelected
                    ? "bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white shadow-md shadow-indigo-500/30 scale-105"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {isSelected && <Sparkles className="w-3 h-3 text-cyan-200 animate-spin" />}
                {t}
              </button>
            );
          })}
        </div>
      )}

      {/* 3D Perspective Card Container */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX: tilt.x,
          rotateY: tilt.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`relative w-full max-w-[460px] rounded-3xl p-6 sm:p-7 backdrop-blur-2xl transition-all duration-300 border shadow-2xl overflow-hidden ${
          currentTier === "diamond"
            ? "bg-gradient-to-b from-[#1C1236]/90 via-[#130E26]/95 to-[#0D0A1C] border-purple-500/40 shadow-[0_0_50px_rgba(168,85,247,0.35)]"
            : currentTier === "platinum"
            ? "bg-gradient-to-b from-[#0F1E36]/90 via-[#0B1527]/95 to-[#070D18] border-cyan-400/40 shadow-[0_0_50px_rgba(34,211,238,0.3)]"
            : currentTier === "gold"
            ? "bg-gradient-to-b from-[#2B1D0E]/90 via-[#1B140A]/95 to-[#0E0B05] border-amber-400/50 shadow-[0_0_50px_rgba(245,158,11,0.35)]"
            : currentTier === "silver"
            ? "bg-gradient-to-b from-[#1E2430]/90 via-[#12161F]/95 to-[#0A0D14] border-slate-400/40 shadow-[0_0_40px_rgba(148,163,184,0.25)]"
            : "bg-gradient-to-b from-[#28170F]/90 via-[#1A100B]/95 to-[#0F0A07] border-amber-800/50 shadow-[0_0_40px_rgba(205,127,50,0.25)]"
        }`}
      >
        {/* Holographic glowing sheen overlay */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-tl from-[#7C5CFF]/20 via-[#22D3EE]/20 to-transparent blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="relative flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#22D3EE] p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0B0B14] rounded-[6px] flex items-center justify-center font-display font-extrabold text-xs text-white">
                E
              </div>
            </div>
            <span className="font-display font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
              ELEVORA <span className="text-[10px] text-slate-400 font-sans font-normal">PROOF CARD</span>
            </span>
          </div>

          {/* Tier Badge */}
          <div
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border bg-gradient-to-r ${activeTierConfig.badge} ${activeTierConfig.border}`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>{currentTier}</span>
          </div>
        </div>

        {/* Candidate Info Hero */}
        <div className="relative flex items-center gap-4 mt-5">
          <div className="relative shrink-0">
            <div
              className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl p-[2px] bg-gradient-to-br"
              style={{
                backgroundImage: `linear-gradient(135deg, ${activeTierConfig.hex}, #7C5CFF)`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={avatarUrl}
                alt={candidateName}
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#10B981] p-1 rounded-full text-slate-950 border-2 border-[#0B0B14]">
              <ShieldCheck className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white truncate">
                {candidateName}
              </h3>
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
            </div>
            <p className="text-xs text-slate-400 truncate">@{candidateUsername}</p>
            <p className="text-xs text-slate-300 font-medium mt-1 truncate">
              {headline}
            </p>
          </div>

          {/* Proof Score Dial */}
          <div className="shrink-0 text-center pl-2 border-l border-white/10">
            <div className="flex items-baseline justify-center gap-0.5">
              <span className="font-display font-black text-2xl sm:text-3xl text-gradient-aurora">
                {currentScore}
              </span>
              <span className="text-[10px] text-slate-400 font-bold">/100</span>
            </div>
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-cyan-400 block mt-[-2px]">
              Proof Score
            </span>
          </div>
        </div>

        {/* Verified Skills Section */}
        <div className="mt-5 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-0.5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Layers className="w-3.5 h-3.5 text-[#7C5CFF]" />
              Verified Skills ({verifiedSkills.length})
            </span>
            <span className="text-[11px] text-cyan-400 font-mono">100% Code-Audited</span>
          </div>

          <div className="space-y-2">
            {verifiedSkills.slice(0, compact ? 2 : 4).map((skill, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition-colors"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-medium text-slate-200 truncate pr-2">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2 shrink-0 font-mono text-[11px]">
                    <span className="text-slate-400">{skill.category}</span>
                    <span className="font-bold text-cyan-300">{skill.score}%</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.score}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shipped Real-World Projects Meta */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/[0.08] text-center">
          <div className="p-2 rounded-xl bg-white/[0.02]">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Projects</span>
            <span className="font-display font-bold text-sm sm:text-base text-white">
              {projectsCount} Verified
            </span>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.02]">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Streak</span>
            <span className="font-display font-bold text-sm sm:text-base text-amber-400 flex items-center justify-center gap-1">
              <Flame className="w-3.5 h-3.5 fill-amber-400" /> 18 Days
            </span>
          </div>
          <div className="p-2 rounded-xl bg-white/[0.02]">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Views</span>
            <span className="font-display font-bold text-sm sm:text-base text-slate-200">
              {(viewsCount / 1000).toFixed(1)}k
            </span>
          </div>
        </div>

        {/* Cryptographic Hash Stamp Footer */}
        <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 truncate pr-2">
            <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate" title={verifiedHash}>
              {truncateHash(verifiedHash, 8, 6)}
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button
              onClick={copyVerificationLink}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[10px]"
              title="Copy shareable link"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
            <button
              onClick={() => setShowShareModal(true)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="View QR & Share"
            >
              <QrCode className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Action Link to public page */}
        {!compact && (
          <div className="mt-4 pt-2">
            <Link
              href={`/u/${candidateUsername}`}
              className="w-full py-2.5 rounded-xl font-display font-semibold text-xs tracking-wide bg-gradient-to-r from-white/[0.08] to-white/[0.04] hover:from-[#7C5CFF]/20 hover:to-[#22D3EE]/20 border border-white/10 hover:border-cyan-400/40 text-white flex items-center justify-center gap-1.5 transition-all duration-200"
            >
              <span>Inspect Full Public Dossier</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>
        )}
      </motion.div>

      {/* Share & QR Code Modal */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm rounded-3xl p-6 bg-[#151528] border border-white/20 text-center text-white shadow-2xl"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-tr from-[#7C5CFF] to-[#22D3EE] flex items-center justify-center mb-3">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-display font-bold text-lg">Verified Proof Dossier</h4>
              <p className="text-xs text-slate-400 mt-1">
                Scan or copy to open candidate&apos;s verified credentials on Elevora.
              </p>

              {/* QR Code Graphic Placeholder */}
              <div className="w-40 h-40 mx-auto my-5 p-3 rounded-2xl bg-white flex flex-col items-center justify-center shadow-lg">
                <div className="w-full h-full bg-slate-900 rounded-lg flex flex-col items-center justify-center p-2 text-center">
                  <QrCode className="w-16 h-16 text-cyan-400 mb-1" />
                  <span className="font-mono text-[9px] text-slate-300">elevora.io/u/{candidateUsername}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-slate-300 truncate mb-4">
                <span className="truncate">https://elevora.io/u/{candidateUsername}</span>
                <button
                  onClick={copyVerificationLink}
                  className="px-2.5 py-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs font-semibold shrink-0"
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <button
                onClick={() => setShowShareModal(false)}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-sm font-semibold transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
