"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
  Calendar,
  ExternalLink,
  Award,
  Users,
  Briefcase,
  ChevronRight,
  Sparkles,
  Layers,
  ArrowRight,
  SlidersHorizontal,
  Lock,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { MOCK_CANDIDATES, CandidateProfile } from "@/lib/mockData";

export default function RecruiterDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState<string>("All");
  const [selectedSkill, setSelectedSkill] = useState<string>("All");
  const [activeTab, setActiveTab] = useState<"search" | "shortlist">("search");
  const [shortlistedIds, setShortlistedIds] = useState<string[]>(["user-alex-1"]);
  const [activeCandidateModal, setActiveCandidateModal] = useState<CandidateProfile | null>(null);

  const toggleShortlist = (id: string) => {
    if (shortlistedIds.includes(id)) {
      setShortlistedIds(shortlistedIds.filter((item) => item !== id));
    } else {
      setShortlistedIds([...shortlistedIds, id]);
    }
  };

  const filteredCandidates = MOCK_CANDIDATES.filter((c) => {
    const matchesQuery =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.skills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTier =
      selectedTier === "All" || c.overallLevel.toLowerCase() === selectedTier.toLowerCase();

    const matchesSkill =
      selectedSkill === "All" ||
      c.skills.some((s) => s.name.toLowerCase().includes(selectedSkill.toLowerCase()));

    const matchesTab =
      activeTab === "search" || (activeTab === "shortlist" && shortlistedIds.includes(c.id));

    return matchesQuery && matchesTier && matchesSkill && matchesTab;
  });

  const availableSkills = ["All", "React", "TypeScript", "Vector", "Distributed", "Rust"];

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white selection:bg-[#7C5CFF] relative">
      <Navbar />

      <main className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-8 border-b border-white/10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-wider mb-2 border border-blue-500/30">
              <Briefcase className="w-3.5 h-3.5" /> Recruiter Intelligence
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
              Verified Talent Search
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-xl font-sans">
              Filter engineers by verified test performance and live code execution rather than resume claims.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("search")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === "search"
                  ? "bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Users className="w-3.5 h-3.5" /> All Verified Candidates ({MOCK_CANDIDATES.length})
            </button>
            <button
              onClick={() => setActiveTab("shortlist")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === "shortlist"
                  ? "bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" /> Shortlisted ({shortlistedIds.length})
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by candidate name, role, or verified skill..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-2.5 pl-11 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Tier Filter */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs text-slate-400 font-mono flex items-center gap-1 mr-1">
              <SlidersHorizontal className="w-3 h-3" /> Tier:
            </span>
            {["All", "Gold", "Platinum", "Diamond"].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedTier === tier
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          {/* Skill Filter */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <span className="text-xs text-slate-400 font-mono">Skill:</span>
            {availableSkills.map((sk) => (
              <button
                key={sk}
                onClick={() => setSelectedSkill(sk)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedSkill === sk
                    ? "bg-[#7C5CFF]/20 text-indigo-300 border border-[#7C5CFF]/40"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {sk}
              </button>
            ))}
          </div>
        </div>

        {/* Candidate Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate) => {
            const isShortlisted = shortlistedIds.includes(candidate.id);
            return (
              <GlassCard
                key={candidate.id}
                className="p-6 border-white/10 flex flex-col justify-between hover:border-cyan-400/40"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={candidate.avatar}
                        alt={candidate.name}
                        className="w-12 h-12 rounded-2xl object-cover border border-cyan-400/40"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-display font-bold text-base text-white">
                            {candidate.name}
                          </h3>
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <span className="text-xs text-slate-400 font-mono">
                          @{candidate.username}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleShortlist(candidate.id)}
                      className={`p-2 rounded-xl transition-colors ${
                        isShortlisted
                          ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                          : "bg-white/5 text-slate-400 hover:text-white border border-white/10"
                      }`}
                      title={isShortlisted ? "Remove from shortlist" : "Add to shortlist"}
                    >
                      <Bookmark className={`w-4 h-4 ${isShortlisted ? "fill-amber-400" : ""}`} />
                    </button>
                  </div>

                  <p className="text-xs text-slate-300 font-medium line-clamp-1 mb-3">
                    {candidate.headline}
                  </p>

                  {/* Tier & Score Banner */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        {candidate.overallLevel} Tier
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono font-bold text-cyan-300">
                        {candidate.levelScore}% Proof Score
                      </span>
                    </div>
                  </div>

                  {/* Verified Skills snippet */}
                  <div className="space-y-1.5 mb-4">
                    <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold block">
                      Top Verified Skills
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {candidate.skills.slice(0, 3).map((sk) => (
                        <span
                          key={sk.id}
                          className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.05] border border-white/5 text-slate-300 font-mono"
                        >
                          {sk.name.split(" ")[0]} ({sk.score}%)
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <Link href={`/u/${candidate.username}`} className="flex-1">
                    <button className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1">
                      <span>View Proof Card</span>
                      <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </Link>

                  <Link href={`/u/${candidate.username}`}>
                    <button className="p-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white hover:opacity-95 text-xs font-bold">
                      <Calendar className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {filteredCandidates.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <Users className="w-10 h-10 mx-auto mb-3 opacity-50" />
            <p className="text-sm font-semibold">No candidates match your current filter.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedTier("All");
                setSelectedSkill("All");
              }}
              className="mt-3 px-4 py-1.5 rounded-xl bg-white/10 text-xs text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
