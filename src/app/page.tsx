"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Cpu,
  Terminal,
  Layers,
  Search,
  Users,
  Briefcase,
  ChevronRight,
  Plus,
  Minus,
  Star,
  Quote,
  Flame,
  Check,
  Compass,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProofCard } from "@/components/ui/ProofCard";
import { TESTIMONIALS, FAQ_ITEMS, CURRENT_CANDIDATE } from "@/lib/mockData";

export default function LandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"candidate" | "recruiter">("candidate");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const steps = [
    {
      num: "01",
      title: "Choose a Role Roadmap",
      desc: "Select curated paths designed by staff engineers: Full-Stack AI, Cloud Distributed Systems, or Frontend Maestro.",
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      tag: "Role-Aligned",
    },
    {
      num: "02",
      title: "Pass Live Skill Checks",
      desc: "No leetcode trivia. Solve real-world concurrency bugs, optimize vector search queries, and pass automated code sandboxes.",
      icon: <Terminal className="w-6 h-6 text-[#7C5CFF]" />,
      tag: "Real Execution",
    },
    {
      num: "03",
      title: "Ship Projects with AI Coach",
      desc: "Build production capstones with our 24/7 AI mentor reviewing PRs, inspecting test coverage, and stress-testing under load.",
      icon: <Cpu className="w-6 h-6 text-[#E879F9]" />,
      tag: "Production Ready",
    },
    {
      num: "04",
      title: "Earn Your Living Proof Card",
      desc: "Every milestone feeds your verifiable Proof Card. Share a cryptographic URL that lets recruiters fast-track you.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      tag: "Verifiable Record",
    },
  ];

  const features = [
    {
      title: "AI Architectural Coach",
      desc: "A senior mentor by your side. Analyzes architecture trade-offs, runs lint & security audits, and guides you line by line.",
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      tag: "24/7 Mentorship",
    },
    {
      title: "Live Interview Coaching",
      desc: "Simulate behavioral, system design, and coding rounds with speech visualizers and real-time scorecards on clarity and depth.",
      icon: <Terminal className="w-6 h-6 text-[#7C5CFF]" />,
      tag: "Instant Feedback",
    },
    {
      title: "Real Job Simulation",
      desc: "Step into real-world day-one engineering tasks: fix live production outages, review legacy PRs, and refactor distributed state.",
      icon: <Layers className="w-6 h-6 text-[#E879F9]" />,
      tag: "Day-One Ready",
    },
    {
      title: "Proof Card & Dossier",
      desc: "A shareable, tamper-proof profile with verified benchmark percentiles, git commit hashes, and lighthouse metrics.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      tag: "Cryptographic Proof",
    },
    {
      title: "Proof-Based Networking",
      desc: "Connect with high-caliber peers based on verified skill tiers. Collaborate on capstones, co-author projects, and earn peer badges.",
      icon: <Users className="w-6 h-6 text-amber-400" />,
      tag: "High-Signal Circle",
    },
    {
      title: "Direct Job Matching",
      desc: "Recruiters filter directly by verified level (Gold, Platinum, Diamond). Bypass resume filters and head straight to technical rounds.",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      tag: "Skip First Rounds",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white selection:bg-[#7C5CFF] selection:text-white relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Subtle glowing aurora backdrop */}
        <div className="hero-glow-bg" />

        {/* Rising glowing particles simulation */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400 animate-float" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#7C5CFF] animate-float-delayed" />
          <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-[#E879F9] animate-float" />
          <div className="absolute top-2/3 right-16 w-2.5 h-2.5 rounded-full bg-cyan-300 animate-float-delayed" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#7C5CFF]/20 via-[#22D3EE]/20 to-[#E879F9]/20 border border-[#7C5CFF]/40 text-cyan-300 text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                <span>Next-Gen Proof of Competency</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white"
              >
                Rise Beyond <br />
                <span className="text-gradient-aurora">Potential.</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base sm:text-xl text-slate-300 font-sans max-w-xl leading-relaxed"
              >
                Elevora turns real work into a verified record that candidates can showcase and recruiters can trust. Follow role roadmaps, pass live skill checks, and ship projects with an AI coach.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link href="/signup">
                  <Button
                    variant="glow"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Build Your Proof Card
                  </Button>
                </Link>

                <Link href="/recruiter">
                  <Button
                    variant="secondary"
                    size="lg"
                    icon={<ShieldCheck className="w-4 h-4 text-cyan-400" />}
                    iconPosition="left"
                  >
                    Hire Verified Talent
                  </Button>
                </Link>
              </motion.div>

              {/* Micro proof counter pills */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-slate-400 font-mono"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-slate-200 font-bold">14,800+</span> Skills Verified
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-slate-200 font-bold">89%</span> Final Screen Pass
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7C5CFF]" />
                  <span className="text-slate-200 font-bold">Zero</span> Resume Fluff
                </div>
              </motion.div>
            </div>

            {/* Right Hero: Floating 3D Proof Card Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <div className="relative w-full max-w-[460px]">
                {/* Glow ring behind card */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#7C5CFF]/30 via-[#22D3EE]/20 to-[#E879F9]/30 blur-2xl -z-10" />

                {/* Proof Card Component */}
                <ProofCard
                  candidateName="Alex Rivera"
                  candidateUsername="alexrivera"
                  headline="Full-Stack AI Systems Architect"
                  score={94}
                  defaultTier="platinum"
                  interactive={true}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar: Verified by Real Work */}
      <section className="py-12 border-y border-white/[0.08] bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Verified alumni & contributors at top engineering organizations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            {["Vercel", "Stripe", "Linear", "Supabase", "OpenAI", "Figma", "Retool"].map(
              (company) => (
                <div
                  key={company}
                  className="font-display font-black text-xl sm:text-2xl tracking-tighter text-slate-300 hover:text-white transition-colors"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Problem vs Solution: Resumes Can't Be Trusted */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Paradigm Shift"
            badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
            title="The Resume Is Broken."
            titleHighlight="Proof Of Work Wins."
            description="Traditional tech hiring relies on unverified text claims and keyword scrapers. Elevora replaces guesswork with verified code execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* The Old Way */}
            <GlassCard
              className="p-8 border-rose-500/20 bg-gradient-to-b from-rose-950/10 to-transparent relative overflow-hidden"
              hoverEffect={false}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-300 border border-rose-500/30 mb-6">
                The Old Broken Reality
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-4">
                Keyword-Stuffed Resumes & The Black Hole
              </h3>
              <ul className="space-y-4 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span>
                    Candidates blast 200+ identical applications into ATS algorithms that discard 98% without human review.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span>
                    Recruiters cannot distinguish genuine builders from candidates who memorized leetcode or embellished bullet points.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span>
                    Self-taught engineers, freshers, and career switchers are filtered out before anyone sees their actual code.
                  </span>
                </li>
              </ul>
            </GlassCard>

            {/* The Elevora Way */}
            <GlassCard
              className="p-8 border-cyan-500/30 bg-gradient-to-b from-cyan-950/20 via-[#121226] to-transparent relative overflow-hidden"
              glow="cyan"
              hoverEffect={true}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 mb-6">
                The Elevora Proof Standard
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white mb-4">
                Verified Code, Living Proof & Direct Access
              </h3>
              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>
                    Every skill is backed by automated code sandboxes, live concurrency audits, and verified capstone repositories.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>
                    Recruiters filter by verified tiers (Gold, Platinum) and inspect verifiable commit hashes in one click.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>
                    AI coach mentors candidates through production bugs so they emerge day-one ready with proven output.
                  </span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* How It Works: 4-Step Animated Timeline */}
      <section id="how-it-works" className="py-24 bg-white/[0.015] border-t border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Engine"
            badgeIcon={<Layers className="w-3.5 h-3.5" />}
            title="How Elevora Works"
            titleHighlight="In 4 Steps."
            description="From learning to hired on one continuous, verified trajectory."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((st, i) => (
              <motion.div
                key={st.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-6 h-full flex flex-col justify-between border-white/10 hover:border-cyan-400/40">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-black text-slate-500">
                        {st.num}
                      </span>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                        {st.tag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      {st.icon}
                    </div>

                    <h4 className="font-display font-bold text-lg text-white mb-2">
                      {st.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      {st.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>Verified Milestone</span>
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/roadmap">
              <Button
                variant="glow"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore Interactive Role Roadmaps
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Card Showcase Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Living Credentials"
            badgeIcon={<ShieldCheck className="w-3.5 h-3.5" />}
            title="The Living"
            titleHighlight="Proof Card."
            description="Your proof card dynamically levels up as you pass live code challenges and ship projects. Switch tiers below to test the level up animation!"
          />

          <div className="mt-8 flex justify-center">
            <ProofCard
              interactive={true}
              defaultTier="gold"
              candidateName="Alex Rivera"
              candidateUsername="alexrivera"
              headline="Full-Stack AI Systems Architect"
            />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white/[0.015] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Comprehensive Platform"
            badgeIcon={<Cpu className="w-3.5 h-3.5" />}
            title="Everything You Need"
            titleHighlight="To Rise."
            description="From AI architectural guidance to mock technical screens, networking, and direct job offers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <GlassCard className="p-6 h-full flex flex-col justify-between border-white/10 hover:border-[#7C5CFF]/40">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {feat.icon}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10">
                        {feat.tag}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-lg text-white mb-2">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-sans">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center justify-end text-xs font-semibold text-cyan-400">
                    <span className="flex items-center gap-1">
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Recruiters Section */}
      <section id="for-recruiters" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide uppercase mb-4">
                <Briefcase className="w-3.5 h-3.5" />
                <span>For Recruiters & Hiring Managers</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Hire Candidates You Can <br />
                <span className="text-gradient-aurora">Trust On Day One.</span>
              </h2>

              <p className="mt-4 text-base text-slate-300 leading-relaxed max-w-xl">
                Stop reviewing 500 inflated resumes. Elevora gives hiring managers a search engine of verified talent. Filter by minimum proof score, verified technology proficiency, and inspected commit histories.
              </p>

              <div className="mt-6 space-y-3 font-sans text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Instant access to code execution traces & lighthouse reports</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Bypass 1st-round screen calls; shortlist pre-audited candidates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Guarantee: 100% genuine code, verified anti-plagiarism sandboxes</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/recruiter">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    iconPosition="right"
                  >
                    Launch Recruiter Search Engine
                  </Button>
                </Link>
              </div>
            </div>

            {/* Recruiter Search Preview Widget */}
            <div className="lg:col-span-6">
              <GlassCard className="p-6 border-white/15 bg-gradient-to-b from-[#14142B] to-[#0D0D1B] shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-cyan-400" />
                    <span className="font-display font-bold text-sm text-white">
                      Verified Talent Filter
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    84 Candidates Matched
                  </span>
                </div>

                {/* Filter tags simulation */}
                <div className="flex flex-wrap gap-2 my-4">
                  <span className="px-2.5 py-1 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-xs font-semibold text-indigo-300">
                    Min Level: Platinum (92+)
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-xs font-semibold text-cyan-300">
                    Next.js App Router
                  </span>
                  <span className="px-2.5 py-1 rounded-xl bg-purple-500/20 border border-purple-500/40 text-xs font-semibold text-purple-300">
                    Vector DBs (pgvector)
                  </span>
                </div>

                {/* Preview candidate row */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Alex"
                        className="w-10 h-10 rounded-xl object-cover"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-display font-bold text-sm text-white">
                            Alex Rivera
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.2 rounded-full bg-cyan-400/20 text-cyan-300">
                            Platinum Tier 4
                          </span>
                        </div>
                        <span className="text-xs text-slate-400">
                          Full-Stack AI Systems • SF (Open to Remote)
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-display font-bold text-lg text-emerald-400">
                        94%
                      </span>
                      <span className="block text-[10px] text-slate-400 uppercase font-mono">
                        Proof Score
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs">
                    <span className="text-slate-400">3 Shipped Projects • 94.8% Test Coverage</span>
                    <Link
                      href="/u/alexrivera"
                      className="text-cyan-300 hover:underline font-semibold flex items-center gap-1"
                    >
                      View Dossier <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Stats with Animated Counters */}
      <section className="py-20 border-y border-white/[0.08] bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="font-display font-black text-4xl sm:text-5xl text-gradient-aurora block">
                14,200+
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-sans mt-2 block font-medium">
                Verified Skill Checks Passed
              </span>
            </div>
            <div>
              <span className="font-display font-black text-4xl sm:text-5xl text-gradient-aurora block">
                89%
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-sans mt-2 block font-medium">
                Interview Final-Round Rate
              </span>
            </div>
            <div>
              <span className="font-display font-black text-4xl sm:text-5xl text-gradient-aurora block">
                3.4x
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-sans mt-2 block font-medium">
                Faster Recruiter Placement
              </span>
            </div>
            <div>
              <span className="font-display font-black text-4xl sm:text-5xl text-gradient-aurora block">
                $138k
              </span>
              <span className="text-xs sm:text-sm text-slate-400 font-sans mt-2 block font-medium">
                Avg. Verified Starting Compensation
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Social Proof"
            badgeIcon={<Quote className="w-3.5 h-3.5" />}
            title="Real Builders."
            titleHighlight="Real Outcomes."
            description="See how candidates went from overlooked resumes to verified hiring offers."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {TESTIMONIALS.map((t) => (
              <GlassCard
                key={t.id}
                className="p-6 flex flex-col justify-between border-white/10"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed italic">
                    &quot;{t.quote}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h5 className="font-display font-bold text-sm text-white">{t.name}</h5>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="py-24 bg-white/[0.015] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Simple Investment"
            badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
            title="Transparent Pricing"
            titleHighlight="For Every Ambition."
            description="Start building your verified proof card today for free, or unlock advanced AI mentoring."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {/* Free */}
            <GlassCard className="p-8 border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold block mb-2">
                  Starter
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-white">$0</span>
                  <span className="text-xs text-slate-400">/ forever free</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Essential tools to start verifying code and build your first proof card.
                </p>

                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>1 Active Role Roadmap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>3 Live Code Skill Checks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Public Shareable Proof Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Bronze & Silver Verification</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/signup">
                  <Button variant="secondary" size="md" className="w-full">
                    Start Free
                  </Button>
                </Link>
              </div>
            </GlassCard>

            {/* Pro Candidate (Featured) */}
            <GlassCard
              className="p-8 border-cyan-400/50 bg-gradient-to-b from-[#181836] to-[#0E0E22] flex flex-col justify-between shadow-[0_0_50px_rgba(34,211,238,0.25)] relative"
              gradientBorder={true}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                Most Popular
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold block mb-2">
                  Pro Candidate
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-white">$19</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Full 24/7 AI coach mentoring, live interview simulation, and Gold/Platinum verification.
                </p>

                <ul className="mt-6 space-y-3 text-xs text-slate-200">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Unlimited Role Roadmaps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Unlimited AI Code PR Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>AI Mock Technical & System Screens</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Platinum & Diamond Tiers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span>Featured in Recruiter Search Engine</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/signup">
                  <Button variant="glow" size="md" className="w-full">
                    Upgrade to Pro
                  </Button>
                </Link>
              </div>
            </GlassCard>

            {/* Recruiter */}
            <GlassCard className="p-8 border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold block mb-2">
                  Recruiter Tier
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-4xl text-white">$199</span>
                  <span className="text-xs text-slate-400">/ month</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  For startups & engineering teams seeking pre-audited, verified engineers.
                </p>

                <ul className="mt-6 space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>Full Verified Talent Search</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>Inspect Raw Commits & Benchmark Data</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>Unlimited Candidate Shortlists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>Direct Fast-Track Scheduling</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link href="/recruiter">
                  <Button variant="secondary" size="md" className="w-full">
                    Recruiter Access
                  </Button>
                </Link>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything You Need"
            titleHighlight="To Know."
            description="Clear answers on verification methods, the living proof card, and how Elevora bridges the hiring gap."
          />

          <div className="space-y-4 mt-12">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-white">
                      {item.question}
                    </span>
                    <span className="p-1 rounded-lg bg-white/5 text-cyan-300 shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-300 font-sans leading-relaxed border-t border-white/[0.04]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="relative rounded-4xl p-8 sm:p-14 bg-gradient-to-r from-[#171333] via-[#121633] to-[#0A172B] border border-cyan-400/40 text-center shadow-[0_0_60px_rgba(124,92,255,0.3)] overflow-hidden">
            {/* Glowing background circles */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#7C5CFF]/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#22D3EE]/20 blur-3xl pointer-events-none" />

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Rise Beyond Potential
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight max-w-2xl mx-auto">
              Stop Submitting Resumes Into The Void. <br />
              <span className="text-gradient-aurora">Let Your Proof Speak.</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans max-w-xl mx-auto">
              Join thousands of engineers and fresh talent proving real skills and fast-tracking to interviews at top tech companies.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/signup">
                <Button
                  variant="glow"
                  size="xl"
                  icon={<ArrowRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Build Your Free Proof Card
                </Button>
              </Link>
              <Link href="/recruiter">
                <Button variant="secondary" size="xl">
                  Search Verified Talent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
