"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Share2,
  Lock,
  Flame,
  Award,
  Layers,
  Check,
  Copy,
  Briefcase,
  Calendar,
  Download,
  Bookmark,
  Github,
  Linkedin,
  ArrowLeft,
  Mail,
  Building,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProofCard } from "@/components/ui/ProofCard";
import { CURRENT_CANDIDATE, MOCK_CANDIDATES } from "@/lib/mockData";
import { truncateHash } from "@/lib/utils";

export default function PublicProofCardPage() {
  const params = useParams();
  const username = (params?.username as string) || "alexrivera";
  const [shortlisted, setShortlisted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // Match candidate or default to Alex Rivera
  const candidate =
    MOCK_CANDIDATES.find((c) => c.username === username.toLowerCase()) ||
    CURRENT_CANDIDATE;

  const handleCopy = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShortlist = () => {
    setShortlisted(!shortlisted);
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white selection:bg-[#7C5CFF] relative">
      <Navbar />

      <main className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top breadcrumb & Recruiter quick bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Elevora Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-mono text-cyan-300">
              Verified Dossier: @{candidate.username}
            </span>
          </div>

          {/* Recruiter Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleCopy}
              className="px-3.5 py-1.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied Link!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Share Dossier</span>
                </>
              )}
            </button>

            <button
              onClick={handleShortlist}
              className={`px-3.5 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                shortlisted
                  ? "bg-amber-500/20 text-amber-300 border-amber-500/40"
                  : "bg-white/[0.05] hover:bg-white/[0.1] border-white/10 text-slate-200"
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${shortlisted ? "fill-amber-400 text-amber-400" : ""}`} />
              <span>{shortlisted ? "Candidate Shortlisted" : "Shortlist"}</span>
            </button>

            <Button
              variant="glow"
              size="sm"
              icon={<Calendar className="w-3.5 h-3.5" />}
              iconPosition="left"
              onClick={() => setShowScheduleModal(true)}
            >
              Schedule Screen
            </Button>
          </div>
        </div>

        {/* Hero Section: Large Verified Dossier Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column: Candidate Dossier Summary */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-6 sm:p-8 border-cyan-400/30 bg-gradient-to-b from-[#14142D] to-[#0D0D1D] shadow-2xl relative overflow-hidden">
              {/* Verification watermark */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified by Elevora Engine</span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl object-cover border-2 border-cyan-400 shadow-lg"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="font-display font-black text-2xl sm:text-3xl text-white">
                      {candidate.name}
                    </h1>
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  </div>
                  <p className="text-xs font-mono text-cyan-300 mt-0.5">
                    @{candidate.username} • {candidate.location}
                  </p>
                  <p className="text-sm text-slate-200 font-medium mt-2 leading-relaxed">
                    {candidate.headline}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-300 mt-6 leading-relaxed font-sans border-t border-white/[0.08] pt-4">
                {candidate.bio}
              </p>

              {/* Cryptographic verification strip */}
              <div className="mt-6 p-3 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400 gap-2">
                <div className="flex items-center gap-2 truncate">
                  <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{candidate.verifiedHash}</span>
                </div>
                <span className="text-emerald-400 font-bold shrink-0">
                  SHA-256 Validated
                </span>
              </div>
            </GlassCard>

            {/* Verified Skills Breakdown */}
            <GlassCard className="p-6 sm:p-8 border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    Verified Competencies
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Assessed through live real-world code checks and benchmark suites.
                  </p>
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-400/10 px-2.5 py-1 rounded-full border border-cyan-400/20">
                  {candidate.skills.length} Skills Audited
                </span>
              </div>

              <div className="space-y-4">
                {candidate.skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-sm text-white">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          {skill.level}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="text-slate-400">{skill.category}</span>
                        <span className="font-bold text-cyan-300 text-sm">{skill.score}/100</span>
                      </div>
                    </div>

                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE]"
                        style={{ width: `${skill.score}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Audit: {skill.assessorType}</span>
                      <span>Verified {skill.verifiedAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Shipped Capstone Projects Gallery */}
            <GlassCard className="p-6 sm:p-8 border-white/10">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-white">
                    Verified Shipped Projects
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Live production applications reviewed line-by-line by AI coaches.
                  </p>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  {candidate.projects.length} Capstones Shipped
                </span>
              </div>

              <div className="space-y-6">
                {candidate.projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-5 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h4 className="font-display font-extrabold text-lg text-white">
                        {proj.title}
                      </h4>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-400/10 px-2.5 py-0.5 rounded-full border border-cyan-400/20">
                          AI Audit Score: {proj.aiReviewScore}/100
                        </span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-3">
                      {proj.description}
                    </p>

                    {/* AI Coach Feedback Quote */}
                    <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200 mb-4 italic">
                      &quot;{proj.aiFeedback}&quot;
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {proj.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.05] text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between pt-3 border-t border-white/[0.06] text-xs gap-2">
                      <div className="flex items-center gap-3 text-slate-400 font-mono">
                        <span>{proj.stats.commits} Commits</span>
                        <span>•</span>
                        <span>{proj.stats.testCoverage} Test Coverage</span>
                        <span>•</span>
                        <span>Lighthouse: {proj.stats.lighthouse}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-300 hover:text-white flex items-center gap-1 font-semibold"
                        >
                          <Github className="w-3.5 h-3.5" /> Code Repo
                        </a>
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                        >
                          Live App <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Right Column: 3D Proof Card Card Showcase */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <ProofCard
              candidateName={candidate.name}
              candidateUsername={candidate.username}
              avatarUrl={candidate.avatar}
              headline={candidate.headline}
              score={candidate.levelScore}
              defaultTier="platinum"
              compact={false}
              interactive={false}
            />

            {/* Recruiter Action Card */}
            <GlassCard className="p-6 border-white/10 text-center">
              <h4 className="font-display font-bold text-base text-white">
                Interested in hiring {candidate.name}?
              </h4>
              <p className="text-xs text-slate-400 mt-1 mb-4">
                Skip standard recruiter screening calls. All competencies have been verified.
              </p>
              <div className="flex flex-col gap-2">
                <Button
                  variant="glow"
                  size="md"
                  onClick={() => setShowScheduleModal(true)}
                  className="w-full"
                >
                  Direct Interview Fast-Track
                </Button>
                <button
                  onClick={handleShortlist}
                  className="w-full py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-200 border border-white/10"
                >
                  {shortlisted ? "Candidate in Shortlist ✓" : "Add to Recruiter Shortlist"}
                </button>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>

      {/* Recruiter Schedule Modal */}
      {showScheduleModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setShowScheduleModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl p-6 sm:p-8 bg-[#14142D] border border-cyan-400/40 text-white shadow-2xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7C5CFF] to-[#22D3EE] flex items-center justify-center mb-3">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-display font-bold text-xl text-white">
              Schedule Technical Screen
            </h3>
            <p className="text-xs text-slate-400 mt-1 mb-4">
              Book a 45-minute conversation with {candidate.name}.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Screen scheduled with ${candidate.name}! An invite has been dispatched.`);
                setShowScheduleModal(false);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Company</label>
                <input
                  type="text"
                  defaultValue="Stripe / Scale AI"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Work Email</label>
                <input
                  type="email"
                  defaultValue="recruiter@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Proposed Date</label>
                <input
                  type="date"
                  defaultValue="2026-11-20"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-xs text-white"
                />
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowScheduleModal(false)}
                  className="flex-1 py-2.5 rounded-xl bg-white/10 text-xs font-semibold"
                >
                  Cancel
                </button>
                <Button type="submit" variant="glow" size="md" className="flex-1">
                  Send Invitation
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
