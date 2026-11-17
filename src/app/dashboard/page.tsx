"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Award,
  Layers,
  Bot,
  Terminal,
  Briefcase,
  Flame,
  CheckCircle2,
  Clock,
  ArrowRight,
  ExternalLink,
  Send,
  Sparkles,
  Code2,
  FolderGit2,
  Eye,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  LogOut,
  Play,
  Share2,
} from "lucide-react";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ProofCard } from "@/components/ui/ProofCard";
import {
  CURRENT_CANDIDATE,
  ROADMAP_DATA,
  MOCK_JOBS,
} from "@/lib/mockData";

export default function CandidateDashboard() {
  const [activeNav, setActiveNav] = useState("overview");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "coach",
      text: "Hey Alex! I just reviewed your recent pull request for the NeuroSync WebSockets layer. Your error recovery is solid, but remember to implement exponential backoff during reconnection storms.",
      time: "10:14 AM",
    },
    {
      sender: "user",
      text: "Thanks! What's my next milestone to hit Platinum Level 5?",
      time: "10:18 AM",
    },
    {
      sender: "coach",
      text: "You're at 94% right now. Passing Step 5 ('Multi-Agent LLM Orchestrator') and stress-testing with 100 concurrent mock agents will elevate your score to 97+ and unlock the Diamond Tier!",
      time: "10:19 AM",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [selectedSkillCheck, setSelectedSkillCheck] = useState<string | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMsg = {
      sender: "user",
      text: inputMessage,
      time: "Just now",
    };

    setChatMessages((prev) => [...prev, newMsg]);
    setInputMessage("");
    setIsTyping(true);

    // Simulated AI Coach reply
    setTimeout(() => {
      setIsTyping(false);
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "coach",
          text: `Solid question. When designing resilient distributed systems, always favor linearizable consistency for state mutations and optimistic UI rollbacks for snappy UX. Would you like me to generate a live code sandbox challenge for this?`,
          time: "Just now",
        },
      ]);
    }, 1200);
  };

  const navItems = [
    { id: "overview", label: "Overview", icon: <Layers className="w-4 h-4" /> },
    { id: "roadmap", label: "My Roadmap", icon: <Compass className="w-4 h-4" />, href: "/roadmap" },
    { id: "proofcard", label: "Proof Card", icon: <Award className="w-4 h-4" />, href: "/u/alexrivera" },
    { id: "interview", label: "AI Interview Coach", icon: <Bot className="w-4 h-4" />, href: "/interview" },
    { id: "jobs", label: "Matched Jobs", icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white flex flex-col selection:bg-[#7C5CFF]">
      {/* Top Bar */}
      <header className="h-16 border-b border-white/[0.08] bg-[#0E0E1C]/80 backdrop-blur-xl px-4 sm:px-8 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C5CFF] to-[#22D3EE] p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full bg-[#0B0B14] rounded-[9px] flex items-center justify-center font-display font-black text-xs text-white">
                E
              </div>
            </div>
            <span className="font-display font-bold text-base tracking-tight text-white hidden sm:inline">
              ELEVORA
            </span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-xs font-semibold text-slate-300">Candidate Dashboard</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300 font-mono">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="font-bold text-white">18 Day Streak</span>
          </div>

          <Link href="/u/alexrivera">
            <Button
              variant="outline"
              size="sm"
              icon={<ExternalLink className="w-3.5 h-3.5" />}
              iconPosition="right"
            >
              Public Proof Card
            </Button>
          </Link>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={CURRENT_CANDIDATE.avatar}
            alt={CURRENT_CANDIDATE.name}
            className="w-8 h-8 rounded-xl object-cover border border-cyan-400/40"
          />
        </div>
      </header>

      {/* Main Workspace Layout with Sidebar */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-60 shrink-0">
          <div className="sticky top-24 space-y-6">
            {/* Candidate Mini Profile Card */}
            <GlassCard className="p-4 border-white/10">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={CURRENT_CANDIDATE.avatar}
                  alt={CURRENT_CANDIDATE.name}
                  className="w-11 h-11 rounded-xl object-cover border border-cyan-400"
                />
                <div className="min-w-0">
                  <h4 className="font-display font-bold text-sm text-white truncate">
                    {CURRENT_CANDIDATE.name}
                  </h4>
                  <span className="text-[11px] text-cyan-300 font-mono block">
                    Tier: {CURRENT_CANDIDATE.overallLevel}
                  </span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                <span>Proof Score</span>
                <span className="font-display font-extrabold text-cyan-400">
                  {CURRENT_CANDIDATE.levelScore} / 100
                </span>
              </div>
            </GlassCard>

            {/* Navigation Links */}
            <nav className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href || "#"}
                  onClick={() => !item.href && setActiveNav(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                    activeNav === item.id && !item.href
                      ? "bg-gradient-to-r from-[#7C5CFF]/20 to-[#22D3EE]/20 text-cyan-300 border border-cyan-400/30"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Quick Action Box */}
            <div className="p-4 rounded-2xl bg-gradient-to-b from-[#191936] to-[#121226] border border-indigo-500/30 text-xs">
              <div className="flex items-center gap-1.5 text-cyan-300 font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Next Level Ready
              </div>
              <p className="text-slate-400 mb-3 leading-relaxed">
                Complete Step 5 to elevate from Platinum to Diamond Tier.
              </p>
              <Link href="/roadmap">
                <button className="w-full py-1.5 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white font-bold text-xs hover:opacity-90 transition-opacity">
                  Resume Capstone
                </button>
              </Link>
            </div>
          </div>
        </aside>

        {/* Center / Right Content Area */}
        <div className="flex-1 space-y-8 min-w-0">
          {/* Top Performance Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <GlassCard className="p-4 border-white/10">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                Proof Score
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-display font-black text-2xl sm:text-3xl text-gradient-aurora">
                  94
                </span>
                <span className="text-xs text-slate-500">/100</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-0.5 mt-1">
                <TrendingUp className="w-3 h-3" /> Top 3% Global
              </span>
            </GlassCard>

            <GlassCard className="p-4 border-white/10">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                Verified Skills
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-display font-black text-2xl sm:text-3xl text-white">
                  6
                </span>
                <span className="text-xs text-slate-500">audited</span>
              </div>
              <span className="text-[10px] text-cyan-300 font-bold block mt-1">
                100% Code-Audited
              </span>
            </GlassCard>

            <GlassCard className="p-4 border-white/10">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                Shipped Projects
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-display font-black text-2xl sm:text-3xl text-white">
                  3
                </span>
                <span className="text-xs text-slate-500">capstones</span>
              </div>
              <span className="text-[10px] text-slate-400 block mt-1">
                Avg. Score: 95.3
              </span>
            </GlassCard>

            <GlassCard className="p-4 border-white/10">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                Profile Views
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="font-display font-black text-2xl sm:text-3xl text-white">
                  14.8k
                </span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold block mt-1">
                +42 Recruiters This Week
              </span>
            </GlassCard>
          </div>

          {/* Current Roadmap Progress Hero Widget */}
          <GlassCard className="p-6 sm:p-8 border-cyan-400/30 bg-gradient-to-r from-[#171732] via-[#121226] to-[#0D0D1D] shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/15 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
                  <Compass className="w-3.5 h-3.5" /> Active Roadmap
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {ROADMAP_DATA.title}
                </h3>
                <p className="text-sm text-slate-400 mt-2 max-w-xl font-sans leading-relaxed">
                  {ROADMAP_DATA.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <Link href="/roadmap">
                    <Button
                      variant="glow"
                      size="md"
                      icon={<Play className="w-3.5 h-3.5 fill-current" />}
                      iconPosition="left"
                    >
                      Continue Step 5: Multi-Agent LLM Orchestrator
                    </Button>
                  </Link>

                  <Link href="/roadmap" className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1">
                    View Complete Roadmap Nodes <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Progress Ring Graphic */}
              <div className="md:col-span-4 flex flex-col items-center justify-center">
                <ProgressRing
                  progress={ROADMAP_DATA.progressPercent}
                  size={135}
                  strokeWidth={12}
                  label={`${ROADMAP_DATA.progressPercent}%`}
                  sublabel="Completed"
                />
                <span className="text-xs font-mono text-slate-400 mt-2">
                  4 of 7 Steps Passed
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Two-Column Middle Section: Upcoming Skill Checks & Active Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming Skill Checks */}
            <GlassCard className="p-6 border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <h4 className="font-display font-bold text-base text-white">
                      Live Skill Checks
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-cyan-400">Sandbox Ready</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm text-white">
                          Vector Embeddings & HNSW Indexing
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <span className="text-xs text-slate-400">Score: 92/100 • Verified</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      PASSED
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-semibold text-sm text-white">
                          Multi-Agent Coordination & Recovery
                        </span>
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      </div>
                      <span className="text-xs text-slate-300">
                        15 Real-world Concurrency Scenarios
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedSkillCheck("Multi-Agent Coordination & Recovery");
                        setShowSkillModal(true);
                      }}
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white text-xs font-bold shadow-md hover:opacity-90 transition-opacity"
                    >
                      Start Check
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-between">
                <span>All checks run inside isolated sandboxes.</span>
                <span className="text-cyan-300 font-semibold">Anti-cheat active</span>
              </div>
            </GlassCard>

            {/* Active Shipped Projects */}
            <GlassCard className="p-6 border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-[#7C5CFF]" />
                    <h4 className="font-display font-bold text-base text-white">
                      Verified Capstones
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">3/3 Audited</span>
                </div>

                <div className="space-y-3">
                  {CURRENT_CANDIDATE.projects.slice(0, 2).map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-colors"
                    >
                      <div className="flex items-center justify-between text-sm font-semibold text-white">
                        <span className="truncate pr-2">{proj.title}</span>
                        <span className="font-mono text-xs text-cyan-300 font-bold shrink-0">
                          {proj.aiReviewScore}/100
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {proj.description}
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[11px] text-slate-400">
                        <span>{proj.stats.commits} Commits • {proj.stats.testCoverage} Coverage</span>
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          Code <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-between">
                <span>AI PR review score feeds into Proof Card level.</span>
                <Link href="/u/alexrivera" className="text-cyan-300 font-semibold hover:underline">
                  View All
                </Link>
              </div>
            </GlassCard>
          </div>

          {/* AI Coach Live Chat Panel & Activity Heatmap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* AI Coach Chat Panel */}
            <div className="lg:col-span-7">
              <GlassCard className="p-6 border-white/10 flex flex-col h-[420px]">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C5CFF] to-[#22D3EE] flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white flex items-center gap-1.5">
                        Elevora AI Coach
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </h4>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Senior Staff Mentor • Online 24/7
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    Pro Mentorship
                  </span>
                </div>

                {/* Messages Feed */}
                <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1 text-xs">
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex flex-col ${
                        msg.sender === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl ${
                          msg.sender === "user"
                            ? "bg-gradient-to-r from-[#7C5CFF] to-[#6366F1] text-white rounded-br-none"
                            : "bg-white/[0.06] border border-white/10 text-slate-200 rounded-bl-none leading-relaxed"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-slate-500 mt-1 px-1">
                        {msg.time}
                      </span>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white/5 w-20 text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  )}
                </div>

                {/* Input form */}
                <form onSubmit={handleSendMessage} className="pt-3 border-t border-white/10 flex items-center gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask AI Coach about architecture, PR bugs, or roadmap tips..."
                    className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </GlassCard>
            </div>

            {/* Activity Heatmap & Recent Feed */}
            <div className="lg:col-span-5">
              <GlassCard className="p-6 border-white/10 h-[420px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <h4 className="font-display font-bold text-sm text-white">
                      Verified Proof Feed
                    </h4>
                    <span className="text-xs font-mono text-cyan-400">Live Stream</span>
                  </div>

                  {/* Simulated Activity Heatmap Matrix */}
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 mb-4">
                    <span className="text-[10px] font-mono uppercase text-slate-400 block mb-2 font-semibold">
                      Proof Activity (Past 4 Weeks)
                    </span>
                    <div className="grid grid-cols-7 gap-1.5">
                      {[...Array(28)].map((_, i) => {
                        const level = [0, 1, 2, 3, 4][(i * 3 + 1) % 5];
                        const bgColors = [
                          "bg-white/5",
                          "bg-cyan-900/60",
                          "bg-cyan-700/70",
                          "bg-cyan-500",
                          "bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.8)]",
                        ];
                        return (
                          <div
                            key={i}
                            title={`Day ${i + 1}: ${level * 2} verified commits`}
                            className={`h-4 rounded-sm transition-all hover:scale-125 ${bgColors[level]}`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Activity stream */}
                  <div className="space-y-3 overflow-y-auto max-h-[190px] pr-1">
                    {CURRENT_CANDIDATE.recentActivities.map((act) => (
                      <div
                        key={act.id}
                        className="flex items-start gap-2.5 text-xs pb-2 border-b border-white/[0.04]"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-200">{act.title}</p>
                          <span className="text-[10px] text-slate-400">{act.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-center text-xs text-slate-400">
                  <span className="text-emerald-400 font-bold">18-day active streak</span> • 142 total verified audits
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Recommended Jobs matched to Candidate Level */}
          <GlassCard className="p-6 sm:p-8 border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
              <div>
                <h3 className="font-display font-extrabold text-xl text-white">
                  Direct Job Matches for Platinum Level 4
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Your verified Proof Card qualifies you to skip technical recruiter phone screens.
                </p>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 self-start sm:self-auto">
                4 Matches Qualified
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_JOBS.map((job) => (
                <div
                  key={job.id}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={job.companyLogo}
                          alt={job.company}
                          className="w-10 h-10 rounded-xl bg-white/10 object-cover"
                        />
                        <div>
                          <h4 className="font-display font-bold text-base text-white">
                            {job.title}
                          </h4>
                          <span className="text-xs text-slate-400">
                            {job.company} • {job.location}
                          </span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-display font-black text-emerald-400">
                          {job.matchScore}% Match
                        </span>
                        <span className="block text-[10px] text-slate-500 font-mono">
                          Min: {job.minLevelRequired}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-sans line-clamp-2 mt-2 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {job.skillsRequired.map((sk) => (
                        <span
                          key={sk}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                        >
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-slate-200">{job.salary}</span>
                    <button className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold transition-all flex items-center gap-1 text-xs">
                      <span>Instant Apply with Proof Card</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Interactive Live Skill Check Modal */}
      <AnimatePresence>
        {showSkillModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setShowSkillModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-2xl rounded-3xl p-6 sm:p-8 bg-[#121226] border border-cyan-400/40 text-white shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-display font-bold text-lg">
                    Elevora Code Sandbox: {selectedSkillCheck}
                  </h3>
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/30">
                  Time: 20 Mins
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                You will be provisioned an isolated Docker container with an active Node.js / TypeScript microservice. Your objective is to resolve a race condition under simulated 2,000 req/s load.
              </p>

              {/* Code mock block */}
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-cyan-300 mb-6 overflow-x-auto">
                <span className="text-slate-500">// Simulated Task Prompt</span>
                <br />
                async function syncAgentState(agentId: string, delta: StateDelta) &#123;
                <br />
                &nbsp;&nbsp;<span className="text-pink-400">await</span> acquireDistributedLock(agentId);
                <br />
                &nbsp;&nbsp;<span className="text-slate-400">// TODO: Fix deadlock when workers retry simultaneously</span>
                <br />
                &#125;
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowSkillModal(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold"
                >
                  Cancel
                </button>
                <Link href="/roadmap">
                  <button
                    onClick={() => setShowSkillModal(false)}
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white text-xs font-bold shadow-md hover:opacity-95"
                  >
                    Launch Live Sandbox Runner
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
