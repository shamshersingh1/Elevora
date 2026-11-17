"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Lock,
  Mail,
  User,
  CheckCircle2,
  Briefcase,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";
import { ProofCard } from "@/components/ui/ProofCard";

export default function SignupPage() {
  const router = useRouter();
  const [role, setRole] = useState<"candidate" | "recruiter">("candidate");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [targetRole, setTargetRole] = useState("Full-Stack AI Engineer");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (role === "recruiter") {
        router.push("/recruiter");
      } else {
        router.push("/dashboard");
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white flex flex-col justify-between selection:bg-[#7C5CFF] relative overflow-hidden">
      <div className="hero-glow-bg opacity-70" />

      {/* Top Navbar */}
      <header className="p-6 max-w-7xl mx-auto w-full flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C5CFF] to-[#22D3EE] p-[1.5px] flex items-center justify-center">
            <div className="w-full h-full bg-[#0B0B14] rounded-[10px] flex items-center justify-center font-display font-black text-sm text-white">
              E
            </div>
          </div>
          <span className="font-display font-extrabold text-xl text-white tracking-tight">
            ELEVORA
          </span>
        </Link>

        <span className="text-xs text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="text-cyan-300 font-bold hover:underline">
            Log in
          </Link>
        </span>
      </header>

      {/* Main Split Screen */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 flex-1 flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-5xl">
          {/* Left: Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <GlassCard className="p-8 sm:p-10 border-white/15 bg-[#121226]/80 shadow-2xl">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Rise Beyond Potential
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
                Create Your Proof Account
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Start your roadmap, verify code milestones, and earn your living Proof Card.
              </p>

              {/* Role Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 rounded-2xl bg-white/[0.04] border border-white/10 my-6">
                <button
                  type="button"
                  onClick={() => setRole("candidate")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    role === "candidate"
                      ? "bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <User className="w-3.5 h-3.5" /> Candidate
                </button>
                <button
                  type="button"
                  onClick={() => setRole("recruiter")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                    role === "recruiter"
                      ? "bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" /> Recruiter
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSignup} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60"
                      placeholder="Alex Rivera"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60"
                      placeholder="alex@elevora.io"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60"
                      placeholder="Minimum 8 characters"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Target Role Goal
                  </label>
                  <select
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    className="w-full bg-[#15152A] border border-white/10 rounded-2xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-cyan-400/60"
                  >
                    <option value="Full-Stack AI Engineer">Full-Stack AI Engineer</option>
                    <option value="Frontend Maestro & Design Technologist">
                      Frontend Maestro & Design Technologist
                    </option>
                    <option value="Distributed Systems & Cloud Architect">
                      Distributed Systems & Cloud Architect
                    </option>
                    <option value="AI Agents & RAG Engineer">AI Agents & RAG Engineer</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="w-full mt-4"
                  isLoading={isLoading}
                >
                  Create Proof Account
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Right: Live Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center justify-center lg:col-span-6 relative"
          >
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                Your Starting Card
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                Bronze Tier Ready To Mint
              </h3>
            </div>

            <ProofCard
              candidateName={name || "Your Name"}
              candidateUsername={name ? name.toLowerCase().replace(/\s+/g, "") : "yourhandle"}
              headline={targetRole}
              defaultTier="bronze"
              score={48}
              interactive={true}
            />
          </motion.div>
        </div>
      </main>

      <footer className="p-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Elevora Inc. &quot;Rise Beyond Potential.&quot;
      </footer>
    </div>
  );
}
