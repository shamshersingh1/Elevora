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

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"candidate" | "recruiter">("candidate");
  const [email, setEmail] = useState("alex@elevora.io");
  const [password, setPassword] = useState("••••••••••••");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
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

  const fillDemoCandidate = () => {
    setRole("candidate");
    setEmail("alex@elevora.io");
    setPassword("password123");
  };

  const fillDemoRecruiter = () => {
    setRole("recruiter");
    setEmail("recruiter@stripe.com");
    setPassword("password123");
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white flex flex-col justify-between selection:bg-[#7C5CFF] relative overflow-hidden">
      {/* Background glow */}
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
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-cyan-300 font-bold hover:underline">
            Sign up free
          </Link>
        </span>
      </header>

      {/* Main Split Screen */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 flex-1 flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-5xl">
          {/* Left: Login Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <GlassCard className="p-8 sm:p-10 border-white/15 bg-[#121226]/80 shadow-2xl">
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Welcome Back
              </div>

              <h1 className="font-display font-black text-3xl sm:text-4xl text-white">
                Log In To Elevora
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                Access your verified Proof Card, live roadmaps, and recruiter matches.
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

              {/* Quick 1-click Demo Fillers */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  type="button"
                  onClick={fillDemoCandidate}
                  className="flex-1 py-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-slate-300 flex items-center justify-center gap-1"
                >
                  <Zap className="w-3 h-3 text-cyan-400" /> Demo Candidate
                </button>
                <button
                  type="button"
                  onClick={fillDemoRecruiter}
                  className="flex-1 py-1.5 px-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[11px] font-semibold text-slate-300 flex items-center justify-center gap-1"
                >
                  <Zap className="w-3 h-3 text-amber-400" /> Demo Recruiter
                </button>
              </div>

              {/* Google OAuth Button */}
              <button
                type="button"
                onClick={handleLogin}
                className="w-full py-3 px-4 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-medium text-xs flex items-center justify-center gap-2.5 transition-colors mb-4"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <div className="flex items-center gap-3 my-4">
                <div className="flex-1 h-[1px] bg-white/10" />
                <span className="text-[11px] font-mono uppercase text-slate-500">or email</span>
                <div className="flex-1 h-[1px] bg-white/10" />
              </div>

              {/* Email Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 transition-colors"
                      placeholder="you@domain.com"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-semibold text-slate-300">Password</label>
                    <a href="#" className="text-xs text-cyan-400 hover:underline">
                      Forgot?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-3 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/60 transition-colors"
                      placeholder="••••••••••••"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="glow"
                  size="lg"
                  className="w-full mt-2"
                  isLoading={isLoading}
                >
                  Sign In as {role === "candidate" ? "Candidate" : "Recruiter"}
                </Button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Right: Visual Proof Card Aura Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center justify-center lg:col-span-6 relative"
          >
            <div className="text-center mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
                Your Proof Follows You Everywhere
              </span>
              <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                Zero Paper. 100% Verified.
              </h3>
            </div>

            <ProofCard
              candidateName="Alex Rivera"
              candidateUsername="alexrivera"
              headline="Full-Stack AI Systems Architect"
              defaultTier="platinum"
              compact={false}
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
