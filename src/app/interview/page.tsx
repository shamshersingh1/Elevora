"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Mic,
  MicOff,
  Send,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Terminal,
  Activity,
  Layers,
  HelpCircle,
  RefreshCw,
  Sliders,
  AlertCircle,
  ThumbsUp,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";

interface InterviewQuestion {
  id: string;
  topic: string;
  question: string;
  context: string;
  expectedKeywords: string[];
}

const QUESTIONS: InterviewQuestion[] = [
  {
    id: "q-1",
    topic: "Full-Stack System Architecture",
    question:
      "How would you design a live collaborative whiteboarding application with sub-50ms latency for 10,000 concurrent active rooms?",
    context: "Assess WebSockets vs SSE, conflict resolution (CRDTs vs OT), and state sharding.",
    expectedKeywords: ["CRDT", "WebSockets", "Redis Pub/Sub", "Horizontal Sharding", "Optimistic Updates"],
  },
  {
    id: "q-2",
    topic: "React 19 & Next.js Performance",
    question:
      "Explain the exact mechanics of React Server Components (RSC) vs Client Components. When would streaming SSR fail or cause waterfall delays, and how do you resolve it?",
    context: "Checks deep knowledge of Suspense boundaries, parallel data fetching, and serialization boundaries.",
    expectedKeywords: ["Suspense", "Serialization", "Streaming SSR", "Promise.all", "Cache Revalidation"],
  },
  {
    id: "q-3",
    topic: "Behavioral & Engineering Incident",
    question:
      "Describe a scenario where a deployment caused a P0 outage in production. How did you triage, communicate to stakeholders, and implement preventative architectural guardrails?",
    context: "Evaluates incident command, blameless post-mortems, and observability metrics.",
    expectedKeywords: ["Rollback", "Blameless Post-Mortem", "Observability", "Circuit Breaker", "Runbook"],
  },
];

export default function InterviewCoachPage() {
  const [selectedTopic, setSelectedTopic] = useState(QUESTIONS[0]);
  const [isRecording, setIsRecording] = useState(false);
  const [candidateResponse, setCandidateResponse] = useState(
    "To achieve sub-50ms latency for 10k rooms, I would decouple the control plane from the real-time event plane. Using distributed WebSockets backed by Redis Pub/Sub or a dedicated edge broker, each room's canvas mutations are expressed as conflict-free replicated data types (CRDTs) to guarantee eventual consistency without central lock contention. For the client, optimistic local rendering provides immediate feedback, while room state snapshots are periodically compacted and persisted to PostgreSQL with pgvector for fast session recovery."
  );
  const [evaluating, setEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<{
    clarity: number;
    technicalAccuracy: number;
    depth: number;
    overallScore: number;
    strengths: string[];
    improvements: string[];
    modelAnswerSnippet: string;
  } | null>({
    clarity: 94,
    technicalAccuracy: 92,
    depth: 88,
    overallScore: 91,
    strengths: [
      "Excellent distinction between CRDTs and central locking to avoid contention.",
      "Clear decoupling of control plane from WebSocket edge delivery.",
      "Thoughtful consideration of state compaction for long-running rooms.",
    ],
    improvements: [
      "Address how to handle network reconnection storms and exponential backoff.",
      "Specify exact metric monitoring (e.g. p99 roundtrip latency thresholds).",
    ],
    modelAnswerSnippet:
      "To ensure fault tolerance under network jitter, layer client-side mutation queues with vector clocks and deploy geo-distributed edge WebSocket terminators with Redis cluster sharding per roomId hash.",
  });

  const handleRunEvaluation = async () => {
    if (!candidateResponse.trim()) return;
    setEvaluating(true);

    try {
      const res = await fetch("/api/ai/interview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: selectedTopic.question,
          topic: selectedTopic.topic,
          answer: candidateResponse,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setFeedback(data);
      } else {
        // Fallback simulation
        setTimeout(() => {
          setFeedback({
            clarity: 93,
            technicalAccuracy: 95,
            depth: 90,
            overallScore: 93,
            strengths: [
              "Strong architectural vocabulary with specific state synchronization primitives.",
              "Concise articulation of trade-offs between latency and eventual consistency.",
            ],
            improvements: [
              "Add mention of disaster recovery replication across cloud availability zones.",
            ],
            modelAnswerSnippet:
              "Incorporate heartbeat ping-pongs and cluster rate-limiters at the edge gateway to safeguard backend workers against rogue WebSocket connections.",
          });
          setEvaluating(false);
        }, 1200);
        return;
      }
    } catch (e) {
      // Offline fallback
      setTimeout(() => {
        setFeedback({
          clarity: 95,
          technicalAccuracy: 94,
          depth: 91,
          overallScore: 93,
          strengths: [
            "Demonstrated deep understanding of distributed state and CRDT convergence.",
            "Clear technical terminology with optimal balance of breadth and depth.",
          ],
          improvements: [
            "Briefly mention memory footprint per active room socket connection.",
          ],
          modelAnswerSnippet:
            "Include memory allocation profiling for room socket buffers and automated room hibernation after inactivity.",
        });
        setEvaluating(false);
      }, 1000);
    } finally {
      setEvaluating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B14] text-white selection:bg-[#7C5CFF] relative">
      <Navbar />

      <main className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2 border border-cyan-400/30">
            <Bot className="w-3.5 h-3.5" /> AI Technical Simulation
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl text-white">
            Interview Coach & Job Simulation
          </h1>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl font-sans">
            Practice realistic system design and engineering challenges with speech or text. Receive real-time scorecards and actionable coaching before your live rounds.
          </p>
        </div>

        {/* Topic Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {QUESTIONS.map((q) => (
            <button
              key={q.id}
              onClick={() => {
                setSelectedTopic(q);
                setFeedback(null);
              }}
              className={`p-4 rounded-2xl text-left transition-all border ${
                selectedTopic.id === q.id
                  ? "bg-gradient-to-r from-[#171736] to-[#121226] border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
                  : "bg-white/[0.03] border-white/10 hover:border-white/20 text-slate-400"
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 font-bold block mb-1">
                {q.topic}
              </span>
              <h4 className="font-display font-bold text-sm text-white line-clamp-2">
                {q.question}
              </h4>
            </button>
          ))}
        </div>

        {/* Main Split: Left Voice/Chat Interface, Right Scorecard Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Simulation Interactive Canvas */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard className="p-6 sm:p-8 border-cyan-400/30 bg-gradient-to-b from-[#14142D] to-[#0D0D1D] shadow-2xl">
              {/* Question Header */}
              <div className="flex items-start gap-3 pb-4 border-b border-white/10 mb-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C5CFF] to-[#22D3EE] flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-300 font-bold">
                    Elevora Interview Director
                  </span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white mt-1">
                    {selectedTopic.question}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 italic">
                    Prompt context: {selectedTopic.context}
                  </p>
                </div>
              </div>

              {/* Simulated Speech Waveform Visualizer */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all ${
                      isRecording
                        ? "bg-rose-500 text-white animate-pulse shadow-[0_0_20px_rgba(244,63,94,0.6)]"
                        : "bg-white/10 text-slate-300 hover:text-white hover:bg-white/15"
                    }`}
                    title={isRecording ? "Stop voice input" : "Start voice input"}
                  >
                    {isRecording ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  </button>
                  <div>
                    <span className="text-xs font-bold text-white block">
                      {isRecording ? "Live Audio Stream Listening..." : "Speech Mode Ready"}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {isRecording ? "Click mic to stop speaking" : "Use microphone or type response below"}
                    </span>
                  </div>
                </div>

                {/* Animated Audio Equalizer Bars */}
                <div className="flex items-center gap-1">
                  {[4, 8, 14, 20, 12, 18, 6, 16, 10].map((height, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full transition-all duration-150 ${
                        isRecording ? "bg-cyan-400 animate-pulse" : "bg-white/20"
                      }`}
                      style={{ height: isRecording ? `${height * 1.5}px` : "8px" }}
                    />
                  ))}
                </div>
              </div>

              {/* Response Textarea */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5 font-semibold">
                  <span>Your Architectural Response</span>
                  <span className="font-mono text-[11px] text-slate-500">
                    {candidateResponse.split(" ").length} words
                  </span>
                </div>
                <textarea
                  rows={7}
                  value={candidateResponse}
                  onChange={(e) => setCandidateResponse(e.target.value)}
                  placeholder="Articulate your trade-offs, architecture choices, failure modes, and metrics..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 leading-relaxed font-sans"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => setCandidateResponse("")}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs text-slate-400 hover:text-white"
                >
                  Clear Answer
                </button>

                <Button
                  variant="glow"
                  size="md"
                  icon={<Sparkles className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={handleRunEvaluation}
                  isLoading={evaluating}
                >
                  Run Real-Time AI Scorecard
                </Button>
              </div>
            </GlassCard>
          </div>

          {/* Right: AI Feedback Scorecard Panel */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <GlassCard className="p-6 sm:p-7 border-white/15 bg-gradient-to-b from-[#161633] to-[#0E0E22] shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300">
                  Real-Time Evaluation Panel
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  Staff Assessor
                </span>
              </div>

              {feedback ? (
                <div className="space-y-5">
                  {/* Overall Score Dial */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">
                        Composite Technical Score
                      </span>
                      <span className="font-display font-black text-3xl text-gradient-aurora">
                        {feedback.overallScore}/100
                      </span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/40">
                      Strong Pass (L6 Ready)
                    </span>
                  </div>

                  {/* Dimension Metrics */}
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold">Clarity & Structure</span>
                        <span className="font-mono text-cyan-300 font-bold">{feedback.clarity}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                          style={{ width: `${feedback.clarity}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold">Technical Accuracy</span>
                        <span className="font-mono text-cyan-300 font-bold">{feedback.technicalAccuracy}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                          style={{ width: `${feedback.technicalAccuracy}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300 font-semibold">System Depth & Trade-offs</span>
                        <span className="font-mono text-cyan-300 font-bold">{feedback.depth}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                          style={{ width: `${feedback.depth}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Strengths */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5 mb-2">
                      <ThumbsUp className="w-3.5 h-3.5" /> What You Did Well
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {feedback.strengths.map((str, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{str}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Areas for Improvement */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5 mb-2">
                      <AlertCircle className="w-3.5 h-3.5" /> Actionable Tips To Reach Diamond
                    </span>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {feedback.improvements.map((imp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Model Answer Snippet */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-xs">
                    <span className="text-[10px] font-mono uppercase text-cyan-300 font-bold block mb-1">
                      Staff Engineer Recommendation
                    </span>
                    <p className="text-slate-300 italic leading-relaxed">
                      &quot;{feedback.modelAnswerSnippet}&quot;
                    </p>
                  </div>
                </div>
              ) : (
                <div className="py-12 text-center text-slate-500 text-xs">
                  <Activity className="w-8 h-8 mx-auto mb-2 opacity-40 text-cyan-400" />
                  <p>Click &quot;Run Real-Time AI Scorecard&quot; to inspect your architectural performance.</p>
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
