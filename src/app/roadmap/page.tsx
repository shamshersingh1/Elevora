"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Play,
  Sparkles,
  Award,
  Terminal,
  Cpu,
  FolderGit2,
  Code2,
  ExternalLink,
  ChevronRight,
  Flame,
  Check,
  X,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { RoadmapNode, RoadmapStepData } from "@/components/ui/RoadmapNode";
import { ROADMAP_DATA } from "@/lib/mockData";
import confetti from "canvas-confetti";

export default function RoadmapPage() {
  const [selectedStep, setSelectedStep] = useState<RoadmapStepData | null>(
    ROADMAP_DATA.steps[4] // Default to current in-progress step
  );
  const [activeRoadmap, setActiveRoadmap] = useState("fullstack-ai");
  const [submittingProject, setSubmittingProject] = useState(false);
  const [projectSubmitted, setProjectSubmitted] = useState(false);
  const [repoInput, setRepoInput] = useState("https://github.com/alexrivera/agent-orchestrator");

  const roadmapsList = [
    { id: "fullstack-ai", title: "Full-Stack AI Systems Architect", level: "8 Weeks", tag: "Most Active" },
    { id: "cloud-systems", title: "Cloud Distributed Systems & Rust", level: "10 Weeks", tag: "Advanced" },
    { id: "frontend-maestro", title: "Frontend Maestro & Motion Design", level: "6 Weeks", tag: "Creative Tech" },
  ];

  const handleSimulateSubmit = () => {
    setSubmittingProject(true);
    setTimeout(() => {
      setSubmittingProject(false);
      setProjectSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#7C5CFF", "#22D3EE", "#10B981"],
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white selection:bg-[#7C5CFF] relative">
      <Navbar />

      <main className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link & Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2 border border-cyan-400/30">
                <Compass className="w-3.5 h-3.5" /> Interactive Role Path
              </div>
              <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
                {ROADMAP_DATA.title}
              </h1>
              <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
                A verified node-based curriculum. Passing skill checks and shipping projects automatically updates your Proof Card on Elevora.
              </p>
            </div>

            {/* Overall Progress */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 shrink-0 text-center">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                Total Path Progress
              </span>
              <span className="font-display font-black text-2xl text-gradient-aurora block mt-0.5">
                {ROADMAP_DATA.progressPercent}%
              </span>
              <span className="text-[11px] text-emerald-400 font-mono">
                4 of 7 Milestones Audited
              </span>
            </div>
          </div>
        </div>

        {/* Roadmap Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-white/10">
          {roadmapsList.map((rm) => (
            <button
              key={rm.id}
              onClick={() => setActiveRoadmap(rm.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeRoadmap === rm.id
                  ? "bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white shadow-md shadow-indigo-500/20"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/5"
              }`}
            >
              <span>{rm.title}</span>
              <span className="text-[10px] opacity-75 font-mono">({rm.level})</span>
            </button>
          ))}
        </div>

        {/* Node-Based Layout: Left Timeline Nodes, Right Step Inspector Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Timeline Nodes */}
          <div className="lg:col-span-7 space-y-2">
            {ROADMAP_DATA.steps.map((step, idx) => (
              <RoadmapNode
                key={step.id}
                step={step as RoadmapStepData}
                index={idx}
                isLast={idx === ROADMAP_DATA.steps.length - 1}
                onSelect={(st) => setSelectedStep(st)}
              />
            ))}
          </div>

          {/* Right Inspector Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <GlassCard className="p-6 sm:p-7 border-cyan-400/30 bg-gradient-to-b from-[#15152F] to-[#0E0E22] shadow-2xl relative overflow-hidden">
              {selectedStep ? (
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                      Step {selectedStep.order} Inspector
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                        selectedStep.status === "COMPLETED"
                          ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                          : selectedStep.status === "IN_PROGRESS"
                          ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                          : "bg-white/5 text-slate-400 border-white/10"
                      }`}
                    >
                      {selectedStep.status}
                    </span>
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-white mb-2">
                    {selectedStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {selectedStep.description}
                  </p>

                  {/* Skills Gain preview */}
                  <div className="mt-4 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1.5">
                      Skills Verified Upon Passing
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedStep.skillsGained?.map((sk) => (
                        <span
                          key={sk}
                          className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.06] text-slate-200 border border-white/10 font-mono"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Step Action / Submission Interface */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    {selectedStep.status === "COMPLETED" && (
                      <div className="space-y-3">
                        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          <div>
                            <span className="font-bold text-xs text-white block">
                              Milestone Audited & Verified
                            </span>
                            <span className="text-[11px] text-slate-400">
                              Score: {selectedStep.score ?? 96}/100 • SHA-256 Stamp Applied
                            </span>
                          </div>
                        </div>

                        <Link href="/u/alexrivera">
                          <button className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors">
                            View on Public Proof Card
                          </button>
                        </Link>
                      </div>
                    )}

                    {selectedStep.status === "IN_PROGRESS" && (
                      <div className="space-y-4">
                        <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/40">
                          <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs mb-1">
                            <Sparkles className="w-4 h-4" /> Ready for AI Architectural Audit
                          </div>
                          <p className="text-xs text-slate-300">
                            Submit your GitHub repository. The Elevora Automated Sandbox will run unit tests, check performance latency, and calculate your new Proof Score.
                          </p>
                        </div>

                        {projectSubmitted ? (
                          <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-center">
                            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                            <h4 className="font-display font-bold text-sm text-white">
                              Audit Passed! Score: 98/100
                            </h4>
                            <p className="text-xs text-slate-300 mt-1">
                              Your Proof Card has been elevated to Platinum Level 4.9.
                            </p>
                            <Link href="/u/alexrivera">
                              <button className="mt-3 px-4 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs">
                                View Updated Card
                              </button>
                            </Link>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <div>
                              <label className="block text-xs font-semibold text-slate-300 mb-1">
                                Repository URL
                              </label>
                              <input
                                type="text"
                                value={repoInput}
                                onChange={(e) => setRepoInput(e.target.value)}
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
                              />
                            </div>

                            <Button
                              variant="glow"
                              size="md"
                              className="w-full"
                              onClick={handleSimulateSubmit}
                              isLoading={submittingProject}
                            >
                              Run Automated Sandbox Audit
                            </Button>
                          </div>
                        )}
                      </div>
                    )}

                    {selectedStep.status === "LOCKED" && (
                      <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-center text-slate-400 text-xs">
                        <Lock className="w-6 h-6 text-slate-500 mx-auto mb-2" />
                        <p>Complete Step {selectedStep.order - 1} to unlock this milestone.</p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-slate-500 text-xs">
                  Select a milestone node to inspect requirements.
                </div>
              )}
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
