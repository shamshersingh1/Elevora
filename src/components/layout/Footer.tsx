"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Github,
  Twitter,
  Linkedin,
  ArrowUpRight,
  Sparkles,
  Lock,
  Globe,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#07070E] border-t border-white/[0.08] text-slate-400 pt-16 pb-12 overflow-hidden">
      {/* Subtle Aurora Glow in Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-radial-gradient from-[#7C5CFF]/10 via-[#22D3EE]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand info */}
          <div className="md:col-span-2">
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

            <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
              &quot;Rise Beyond Potential.&quot; Elevora turns real work into a verified record that candidates can showcase and recruiters can trust.
            </p>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Elevora Verification Engine • Operational</span>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/roadmap" className="hover:text-cyan-300 transition-colors">
                  Role Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/u/alexrivera" className="hover:text-cyan-300 transition-colors">
                  Living Proof Cards
                </Link>
              </li>
              <li>
                <Link href="/interview" className="hover:text-cyan-300 transition-colors">
                  AI Interview Simulation
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-cyan-300 transition-colors">
                  Candidate Dashboard
                </Link>
              </li>
              <li>
                <Link href="/recruiter" className="hover:text-cyan-300 transition-colors">
                  Recruiter Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Verification & Resources */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Proof & Trust
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Code Sandbox Audits
                </span>
              </li>
              <li>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Lock className="w-3.5 h-3.5 text-cyan-400" />
                  SHA-256 Verifiable Hash
                </span>
              </li>
              <li>
                <span className="text-slate-400">WCAG AA Standard</span>
              </li>
              <li>
                <span className="text-slate-400">Anti-Cheating Sandboxing</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">
              Community
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-slate-500">
              Made with passion for builders, career switchers, and visionary engineering teams.
            </p>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ELEVORA Inc. All rights reserved. &quot;Rise Beyond Potential.&quot;</p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/security" className="hover:text-slate-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
