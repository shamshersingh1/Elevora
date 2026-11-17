// ELEVORA — Interactive Single Page Application (React 18 + Tailwind)
const { useState, useEffect, useRef } = React;

// Lucide Icon Helper Component
function Icon({ name, className = "w-4 h-4", ...props }) {
  const iconMap = {
    sparkles: `<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>`,
    shieldCheck: `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>`,
    checkCircle2: `<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>`,
    arrowRight: `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`,
    arrowLeft: `<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>`,
    check: `<path d="M20 6 9 17l-5-5"/>`,
    lock: `<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
    externalLink: `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/>`,
    copy: `<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>`,
    award: `<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>`,
    flame: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`,
    compass: `<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>`,
    bot: `<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>`,
    briefcase: `<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
    layers: `<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>`,
    send: `<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>`,
    search: `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
    bookmark: `<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>`,
    calendar: `<rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>`,
    mic: `<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>`,
    micOff: `<line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/>`,
    sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`,
    moon: `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>`,
    terminal: `<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>`,
    cpu: `<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>`,
    folderGit2: `<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><circle cx="12" cy="13" r="2"/><path d="M14 13h3"/><path d="M7 13h3"/>`,
    code2: `<path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/>`,
    zap: `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
    user: `<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>`,
    star: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
    play: `<polygon points="6 3 20 12 6 21 6 3"/>`
  };

  const svgInner = iconMap[name] || iconMap.sparkles;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: svgInner }}
      {...props}
    />
  );
}

// Reusable Living Proof Card Component
function ProofCard({ tier = "platinum", interactive = true, onTierChange }) {
  const [currentTier, setCurrentTier] = useState(tier);
  const [copied, setCopied] = useState(false);

  const tierMeta = {
    bronze: { label: "Bronze", score: 48, hex: "#CD7F32", badge: "from-amber-700/30 to-amber-900/40 text-amber-300 border-amber-700/50" },
    silver: { label: "Silver", score: 68, hex: "#94A3B8", badge: "from-slate-400/30 to-slate-600/40 text-slate-200 border-slate-400/50" },
    gold: { label: "Gold", score: 84, hex: "#F59E0B", badge: "from-amber-400/30 to-yellow-600/40 text-amber-200 border-amber-400/60" },
    platinum: { label: "Platinum", score: 94, hex: "#38BDF8", badge: "from-cyan-400/30 to-blue-600/40 text-cyan-200 border-cyan-400/60" },
    diamond: { label: "Diamond", score: 99, hex: "#C084FC", badge: "from-purple-400/30 to-pink-600/40 text-purple-200 border-purple-400/70" },
  };

  const current = tierMeta[currentTier];

  const handleSelectTier = (t) => {
    setCurrentTier(t);
    onTierChange?.(t);
    if (window.confetti) {
      window.confetti({
        particleCount: 75,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#7C5CFF", "#22D3EE", "#E879F9", "#F59E0B"],
      });
    }
  };

  const copyHash = () => {
    navigator.clipboard?.writeText("sha256:8f4a7c1b29d0e3a478c9e5b8a1f2349071cd8a12e345b89c7d01e4a56b7c89f0");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col items-center select-none w-full max-w-[440px]">
      {interactive && (
        <div className="flex items-center gap-1 p-1 mb-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
          {Object.keys(tierMeta).map((t) => (
            <button
              key={t}
              onClick={() => handleSelectTier(t)}
              className={`px-3 py-1 text-xs font-bold rounded-xl transition-all capitalize ${
                currentTier === t
                  ? "bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white shadow-md scale-105"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* 3D Glass Proof Card Box */}
      <div className="w-full rounded-3xl p-6 sm:p-7 backdrop-blur-2xl bg-gradient-to-b from-[#14142E]/95 via-[#0E0E20]/95 to-[#090915] border border-cyan-400/40 shadow-[0_0_50px_rgba(34,211,238,0.25)] relative overflow-hidden transition-all duration-300 hover:scale-[1.01]">
        {/* Holographic Sheen */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-tl from-[#7C5CFF]/20 to-transparent blur-3xl pointer-events-none" />

        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
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

          <div className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 border bg-gradient-to-r ${current.badge}`}>
            <Icon name="award" className="w-3.5 h-3.5" />
            <span>{current.label}</span>
          </div>
        </div>

        {/* Candidate Profile Hero */}
        <div className="flex items-center gap-4 mt-5">
          <div className="relative shrink-0">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
              alt="Alex Rivera"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400 shadow-md"
            />
            <div className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full text-slate-950 border-2 border-[#0B0B14]">
              <Icon name="shieldCheck" className="w-3 h-3 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h3 className="font-display font-extrabold text-lg text-white truncate">
                Alex Rivera
              </h3>
              <Icon name="checkCircle2" className="w-4 h-4 text-cyan-400 shrink-0" />
            </div>
            <p className="text-xs text-slate-400 truncate">@alexrivera • San Francisco, CA</p>
            <p className="text-xs text-slate-300 font-medium mt-1 truncate">
              Full-Stack AI Systems Architect
            </p>
          </div>

          {/* Proof Score Dial */}
          <div className="shrink-0 text-center pl-2 border-l border-white/10">
            <div className="flex items-baseline justify-center gap-0.5">
              <span className="font-display font-black text-2xl text-gradient-aurora">
                {current.score}
              </span>
              <span className="text-[10px] text-slate-400 font-bold">/100</span>
            </div>
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-cyan-400 block mt-[-2px]">
              Proof Score
            </span>
          </div>
        </div>

        {/* Verified Skills */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-300 font-semibold px-0.5">
            <span className="flex items-center gap-1.5">
              <Icon name="layers" className="w-3.5 h-3.5 text-[#7C5CFF]" /> Verified Skills (6)
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">100% Code-Audited</span>
          </div>

          {[
            { name: "React 19 & Next.js App Router", score: 96 },
            { name: "TypeScript Metaprogramming", score: 94 },
            { name: "Vector Search & RAG (pgvector)", score: 95 },
          ].map((sk, idx) => (
            <div key={idx} className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-medium text-slate-200 truncate">{sk.name}</span>
                <span className="font-mono text-cyan-300 font-bold">{sk.score}%</span>
              </div>
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE]"
                  style={{ width: `${sk.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/[0.08] text-center text-xs">
          <div className="p-1.5 rounded-xl bg-white/[0.02]">
            <span className="text-[9px] uppercase font-bold text-slate-400 block">Projects</span>
            <span className="font-display font-bold text-white">3 Shipped</span>
          </div>
          <div className="p-1.5 rounded-xl bg-white/[0.02]">
            <span className="text-[9px] uppercase font-bold text-slate-400 block">Streak</span>
            <span className="font-display font-bold text-amber-400 flex items-center justify-center gap-1">
              <Icon name="flame" className="w-3 h-3" /> 18 Days
            </span>
          </div>
          <div className="p-1.5 rounded-xl bg-white/[0.02]">
            <span className="text-[9px] uppercase font-bold text-slate-400 block">Views</span>
            <span className="font-display font-bold text-slate-200">14.8k</span>
          </div>
        </div>

        {/* Verifiable Hash Footer */}
        <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-1.5 truncate pr-2">
            <Icon name="lock" className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="truncate">sha256:8f4a...b7c89f0</span>
          </div>

          <button
            onClick={copyHash}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[10px]"
          >
            {copied ? (
              <>
                <Icon name="check" className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Icon name="copy" className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// MAIN ELEVORA APPLICATION
function ElevoraApp() {
  const [currentView, setCurrentView] = useState("landing");
  const [theme, setTheme] = useState("dark");
  const [openFaq, setOpenFaq] = useState(0);

  // Recruiter Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTier, setSelectedTier] = useState("All");
  const [shortlisted, setShortlisted] = useState(["user-1"]);

  // Candidate Dashboard State
  const [chatMessages, setChatMessages] = useState([
    { sender: "coach", text: "Hey Alex! I reviewed your NeuroSync PR. Error recovery is clean, but ensure exponential backoff on reconnection storms.", time: "10:14 AM" },
    { sender: "user", text: "Got it! How do I unlock the Diamond tier milestone?", time: "10:18 AM" },
    { sender: "coach", text: "Pass Step 5 ('Multi-Agent LLM Orchestrator') and benchmark under 100 concurrent mock agents to hit 97+ Proof Score!", time: "10:19 AM" },
  ]);
  const [chatInput, setChatInput] = useState("");

  // Interview Coach State
  const [isRecording, setIsRecording] = useState(false);
  const [interviewAnswer, setInterviewAnswer] = useState(
    "To achieve sub-50ms latency for 10k rooms, I decouple the control plane from the real-time event plane. By using distributed WebSockets backed by Redis Pub/Sub, each canvas mutation is modeled as a CRDT to guarantee eventual consistency without central lock contention. On the client, optimistic rendering gives 60fps responsiveness."
  );
  const [feedback, setFeedback] = useState({
    clarity: 94,
    technicalAccuracy: 92,
    depth: 90,
    overall: 92,
    strengths: [
      "Optimal CRDT selection to avoid centralized locking.",
      "Clear separation between control and real-time event streams.",
    ],
    tips: [
      "Detail network reconnection backoff during cloud availability zone splits.",
    ]
  });

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMsg = { sender: "user", text: chatInput, time: "Just now" };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");

    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "coach",
          text: "Excellent observation. For distributed state consistency, prioritize idempotency keys on every transaction and stream mutation logs via partitioned Kafka offsets.",
          time: "Just now",
        },
      ]);
    }, 1000);
  };

  const handleSimulateEval = () => {
    if (window.confetti) {
      window.confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative selection:bg-[#7C5CFF] selection:text-white">
      {/* Aurora Ambient Glow Background */}
      <div className="hero-glow-bg" />

      {/* STICKY GLASS NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/[0.08] px-4 sm:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView("landing")}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7C5CFF] via-[#22D3EE] to-[#E879F9] p-[2px] shadow-[0_0_20px_rgba(124,92,255,0.4)]">
            <div className="w-full h-full bg-[#0B0B14] rounded-[14px] flex items-center justify-center">
              <span className="font-display font-black text-lg bg-gradient-to-r from-[#7C5CFF] via-[#22D3EE] to-[#E879F9] bg-clip-text text-transparent">
                E
              </span>
            </div>
          </div>
          <div>
            <span className="font-display font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              ELEVORA
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 font-sans block -mt-1">
              Proof of Work
            </span>
          </div>
        </div>

        {/* View Navigation Switchers */}
        <nav className="hidden lg:flex items-center gap-1 rounded-full px-4 py-1.5 bg-white/[0.03] border border-white/10 backdrop-blur-md">
          {[
            { id: "landing", label: "Landing" },
            { id: "dashboard", label: "Candidate Dashboard" },
            { id: "roadmap", label: "Role Roadmaps" },
            { id: "proofcard", label: "Living Proof Card" },
            { id: "recruiter", label: "Recruiter Search" },
            { id: "interview", label: "AI Interview Coach" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                currentView === item.id
                  ? "bg-[#7C5CFF]/20 text-cyan-300 border border-[#7C5CFF]/40 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action CTAs & Theme Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 border border-white/10 transition-colors"
            title="Toggle Light/Dark Theme"
          >
            <Icon name={theme === "dark" ? "sun" : "moon"} className="w-4 h-4 text-amber-300" />
          </button>

          <button
            onClick={() => setCurrentView("dashboard")}
            className="hidden sm:inline-flex px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/[0.06] hover:bg-white/10 border border-white/10"
          >
            Dashboard
          </button>

          <button
            onClick={() => setCurrentView("dashboard")}
            className="px-5 py-2.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-[#7C5CFF] via-[#22D3EE] to-[#E879F9] text-white shadow-[0_0_25px_rgba(124,92,255,0.4)] hover:opacity-95 transition-all flex items-center gap-1.5"
          >
            <span>Get Started</span>
            <Icon name="arrowRight" className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/* VIEW 1: LANDING PAGE */}
      {currentView === "landing" && (
        <main className="pt-28 pb-20">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#7C5CFF]/20 via-[#22D3EE]/20 to-[#E879F9]/20 border border-[#7C5CFF]/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
                  <Icon name="sparkles" className="w-3.5 h-3.5 text-cyan-300" /> Next-Gen Proof of Competency
                </div>

                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] text-white">
                  Rise Beyond <br />
                  <span className="text-gradient-aurora">Potential.</span>
                </h1>

                <p className="mt-6 text-base sm:text-xl text-slate-300 font-sans max-w-xl leading-relaxed">
                  Elevora turns real work into a verified record that candidates can showcase and recruiters can trust. Follow role roadmaps, pass live skill checks, and ship projects with an AI coach.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => setCurrentView("dashboard")}
                    className="px-8 py-4 rounded-2xl font-display font-bold text-base bg-gradient-to-r from-[#7C5CFF] via-[#22D3EE] to-[#E879F9] text-white shadow-[0_0_35px_rgba(124,92,255,0.5)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] flex items-center gap-2 transition-all"
                  >
                    <span>Build Your Proof Card</span>
                    <Icon name="arrowRight" className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setCurrentView("recruiter")}
                    className="px-6 py-4 rounded-2xl font-display font-semibold text-base bg-white/[0.07] hover:bg-white/[0.12] text-white border border-white/10 flex items-center gap-2 transition-all"
                  >
                    <Icon name="shieldCheck" className="w-4 h-4 text-cyan-400" />
                    <span>Hire Verified Talent</span>
                  </button>
                </div>

                {/* Counters */}
                <div className="mt-10 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs text-slate-400 font-mono">
                  <div><span className="text-white font-bold text-sm">14,800+</span> Skills Audited</div>
                  <div><span className="text-cyan-300 font-bold text-sm">89%</span> Final Screen Pass</div>
                  <div><span className="text-emerald-400 font-bold text-sm">100%</span> Code-Backed</div>
                </div>
              </div>

              {/* Right Floating Proof Card Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <ProofCard tier="platinum" interactive={true} />
              </div>
            </div>
          </section>

          {/* Trust Bar */}
          <section className="py-10 border-y border-white/[0.08] bg-white/[0.01] text-center">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mb-5">
              Verified alumni & contributors at top engineering organizations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70">
              {["Vercel", "Stripe", "Linear", "Supabase", "OpenAI", "Figma"].map((c) => (
                <span key={c} className="font-display font-black text-xl text-slate-300 hover:text-white transition-colors">
                  {c}
                </span>
              ))}
            </div>
          </section>

          {/* Problem vs Solution */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 mb-2 block">
                The Paradigm Shift
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                Resumes Can&apos;t Be Trusted. <span className="text-gradient-aurora">Proof Wins.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-8 border-rose-500/20 bg-gradient-to-b from-rose-950/10 to-transparent">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/15 text-rose-300 border border-rose-500/30 mb-4">
                  The Broken Resume Model
                </span>
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  Keyword Stuffing & The Black Hole
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span> 200+ applications sent into automated ATS filters that discard candidates blindly.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span> Recruiters cannot distinguish genuine engineers from leetcode memorizers.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-rose-400 font-bold">✕</span> Career switchers and freshers are rejected without anyone looking at their actual code.
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 border-cyan-400/30 bg-gradient-to-b from-cyan-950/20 to-transparent">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 mb-4">
                  The Elevora Proof Standard
                </span>
                <h3 className="font-display font-bold text-2xl text-white mb-4">
                  Verified Sandboxes & Living Dossiers
                </h3>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <Icon name="check" className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> All skills validated via live code execution and benchmark audits.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon name="check" className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> Living Proof Cards update in real-time with commit hashes and test coverage.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Icon name="check" className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> Recruiters search by verified level (Gold, Platinum) and bypass 1st-round phone screens.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4-Step How it Works */}
          <section className="py-20 border-t border-white/[0.08] bg-white/[0.015]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 block mb-2">
                  The Path To Hired
                </span>
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                  How Elevora Works in <span className="text-gradient-aurora">4 Steps</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { num: "01", title: "Choose a Role Roadmap", desc: "Select curated engineering tracks: Full-Stack AI Systems, Cloud Distributed Systems, or Frontend Maestro." },
                  { num: "02", title: "Pass Live Skill Checks", desc: "Solve real concurrency bugs, optimize vector searches, and pass automated anti-cheat sandboxes." },
                  { num: "03", title: "Ship Projects with AI Coach", desc: "Build capstone apps with our 24/7 AI mentor reviewing PRs, tests, and architectural trade-offs." },
                  { num: "04", title: "Earn Your Proof Card", desc: "Share a cryptographic dossier that lets recruiters verify your code and fast-track to final rounds." },
                ].map((st) => (
                  <div key={st.num} className="glass-card p-6 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-3xl font-black text-slate-500 block mb-3">{st.num}</span>
                      <h4 className="font-display font-bold text-lg text-white mb-2">{st.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{st.desc}</p>
                    </div>
                    <div className="mt-6 pt-3 border-t border-white/[0.06] text-xs font-mono text-cyan-400 flex items-center justify-between">
                      <span>Verified Step</span>
                      <Icon name="checkCircle2" className="w-4 h-4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
                Everything You Need <span className="text-gradient-aurora">To Rise</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "AI Architectural Coach", desc: "Senior staff mentorship 24/7 to inspect pull requests, architectural trade-offs, and latency budgets." },
                { title: "Live Interview Simulation", desc: "Interactive speech and system design challenges with real-time multi-dimensional scoring." },
                { title: "Day-One Job Simulation", desc: "Face real production outages, review legacy microservice PRs, and troubleshoot distributed state." },
                { title: "Living Proof Card", desc: "Cryptographic SHA-256 verifiable dossier showcasing commit hashes and lighthouse benchmark percentiles." },
                { title: "Proof-Based Networking", desc: "Collaborate with high-caliber engineers filtered by verified skill levels rather than superficial profiles." },
                { title: "Direct Verified Matching", desc: "Companies filter directly by verified skill scores, granting immediate technical screen passes." },
              ].map((f) => (
                <div key={f.title} className="glass-card p-6">
                  <h4 className="font-display font-bold text-lg text-white mb-2">{f.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h3 className="font-display font-extrabold text-3xl text-white text-center mb-8">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {[
                { q: "How is the Elevora Proof Card verified?", a: "Every skill badge requires passing live code execution sandboxes, automated stress tests, and capstone code reviews. Nothing is based on self-reported claims." },
                { q: "Can recruiters view the candidate's actual code?", a: "Yes. Recruiters can inspect commit histories, benchmark percentiles, and AI code review audits directly from the candidate's shareable link." },
                { q: "Is Elevora suitable for freshers and career switchers?", a: "Elevora is specifically designed for career switchers and freshers who lack traditional credentials but possess real engineering skills." },
              ].map((faq, i) => (
                <div key={i} className="glass-card p-5 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                  <div className="flex items-center justify-between font-display font-bold text-white text-base">
                    <span>{faq.q}</span>
                    <span className="text-cyan-400">{openFaq === i ? "−" : "+"}</span>
                  </div>
                  {openFaq === i && (
                    <p className="mt-3 text-sm text-slate-300 leading-relaxed font-sans border-t border-white/[0.06] pt-3">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {/* VIEW 2: CANDIDATE DASHBOARD */}
      {currentView === "dashboard" && (
        <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase">Candidate Command Center</span>
              <h1 className="font-display font-black text-3xl text-white">Alex Rivera&apos;s Workspace</h1>
            </div>

            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-1.5">
                <Icon name="flame" className="w-3.5 h-3.5" /> 18-Day Streak
              </span>
              <button
                onClick={() => setCurrentView("proofcard")}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white text-xs font-bold flex items-center gap-1.5"
              >
                <span>View Public Dossier</span>
                <Icon name="externalLink" className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Top Metric Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="glass-card p-4">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Proof Score</span>
              <span className="font-display font-black text-3xl text-gradient-aurora block mt-1">94/100</span>
              <span className="text-[10px] text-emerald-400 font-bold">Top 3% Globally</span>
            </div>
            <div className="glass-card p-4">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Verified Skills</span>
              <span className="font-display font-black text-3xl text-white block mt-1">6 Audited</span>
              <span className="text-[10px] text-cyan-300 font-bold">100% Code-Audited</span>
            </div>
            <div className="glass-card p-4">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Capstones Shipped</span>
              <span className="font-display font-black text-3xl text-white block mt-1">3 Projects</span>
              <span className="text-[10px] text-slate-400 font-bold">Avg. Review: 95.3</span>
            </div>
            <div className="glass-card p-4">
              <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">Recruiter Views</span>
              <span className="font-display font-black text-3xl text-white block mt-1">14.8k</span>
              <span className="text-[10px] text-emerald-400 font-bold">+42 This Week</span>
            </div>
          </div>

          {/* Roadmap Progress Hero */}
          <div className="glass-card p-6 sm:p-8 border-cyan-400/40 bg-gradient-to-r from-[#171732] to-[#0D0D1D] mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                  Active Roadmap • Step 5 of 7
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  Full-Stack AI Systems Architect
                </h3>
                <p className="text-sm text-slate-400 mt-2 max-w-xl">
                  Currently building capstone: Multi-Agent LLM Orchestrator with streaming tool execution and persistent vector memory.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={() => setCurrentView("roadmap")}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white text-xs font-bold flex items-center gap-1.5"
                  >
                    <Icon name="play" className="w-3.5 h-3.5" /> Continue Step 5
                  </button>
                  <button
                    onClick={() => setCurrentView("roadmap")}
                    className="text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    View All Roadmap Nodes →
                  </button>
                </div>
              </div>

              {/* Progress Graphic */}
              <div className="w-32 h-32 rounded-full border-4 border-cyan-400/30 border-t-cyan-400 flex flex-col items-center justify-center shrink-0">
                <span className="font-display font-black text-2xl text-white">68%</span>
                <span className="text-[10px] text-slate-400 uppercase font-mono">Completed</span>
              </div>
            </div>
          </div>

          {/* Middle: AI Coach Chat + Activity Heatmap */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* AI Coach Chat Box */}
            <div className="lg:col-span-7 glass-card p-6 flex flex-col h-[400px]">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <Icon name="bot" className="w-5 h-5 text-cyan-400" />
                  <span className="font-display font-bold text-sm text-white">Elevora AI Architectural Coach</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">Online 24/7</span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs">
                {chatMessages.map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}>
                    <div className={`p-3 rounded-2xl max-w-[85%] ${m.sender === "user" ? "bg-indigo-600 text-white" : "bg-white/[0.06] text-slate-200 border border-white/10"}`}>
                      {m.text}
                    </div>
                    <span className="text-[9px] text-slate-500 mt-0.5">{m.time}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendChat} className="pt-3 border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about system design, code review bugs, or roadmap..."
                  className="flex-1 bg-white/[0.04] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
                <button type="submit" className="p-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white">
                  <Icon name="send" className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Heatmap & Recent Milestones */}
            <div className="lg:col-span-5 glass-card p-6 flex flex-col justify-between h-[400px]">
              <div>
                <span className="font-display font-bold text-sm text-white block mb-3">Verified Work Heatmap</span>
                <div className="grid grid-cols-7 gap-1.5 p-3 rounded-2xl bg-white/[0.02] border border-white/5 mb-4">
                  {[...Array(28)].map((_, i) => {
                    const colors = ["bg-white/5", "bg-cyan-900/60", "bg-cyan-600", "bg-cyan-400"];
                    return <div key={i} className={`h-4 rounded-sm ${colors[i % 4]}`} />;
                  })}
                </div>

                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-2">Recent Milestones</span>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-slate-200 font-medium">Leveled up to Platinum Tier 4</span>
                    <span className="text-cyan-400 font-mono font-bold">94 Score</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                    <span className="text-slate-200 font-medium">Shipped NeuroSync Capstone</span>
                    <span className="text-emerald-400 font-mono font-bold">96 Score</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentView("interview")}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5"
              >
                <Icon name="bot" className="w-3.5 h-3.5 text-cyan-400" />
                <span>Launch Mock Interview Simulation</span>
              </button>
            </div>
          </div>
        </main>
      )}

      {/* VIEW 3: ROLE ROADMAPS */}
      {currentView === "roadmap" && (
        <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-300 font-bold uppercase">Milestone Path</span>
              <h1 className="font-display font-black text-3xl text-white">Full-Stack AI Systems Architect</h1>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-cyan-400/15 text-cyan-300 border border-cyan-400/30 text-xs font-mono font-bold">
              68% Complete
            </span>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              { num: 1, title: "React 19 & Next.js Server Components", status: "COMPLETED", score: "96/100" },
              { num: 2, title: "High-Performance TypeScript Systems", status: "COMPLETED", score: "94/100" },
              { num: 3, title: "Real-Time Distributed Workspace (NeuroSync)", status: "COMPLETED", score: "96/100" },
              { num: 4, title: "Vector Embeddings & Semantic Search (pgvector)", status: "COMPLETED", score: "92/100" },
              { num: 5, title: "Multi-Agent LLM Orchestrator Capstone", status: "IN_PROGRESS", score: "Current Milestone" },
              { num: 6, title: "Production Chaos & Load Hardening Audit", status: "LOCKED", score: "Locked" },
            ].map((step) => (
              <div
                key={step.num}
                className={`p-6 rounded-3xl border transition-all flex items-center justify-between ${
                  step.status === "IN_PROGRESS"
                    ? "bg-gradient-to-r from-[#171736] to-[#101026] border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                    : step.status === "COMPLETED"
                    ? "glass-card border-white/10"
                    : "glass-card opacity-60 border-white/5"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-display font-black text-sm ${
                    step.status === "COMPLETED" ? "bg-emerald-500 text-slate-950" : step.status === "IN_PROGRESS" ? "bg-cyan-400 text-slate-950" : "bg-white/10 text-slate-500"
                  }`}>
                    {step.status === "COMPLETED" ? <Icon name="check" className="w-5 h-5 stroke-[3]" /> : step.num}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">{step.title}</h4>
                    <span className="text-xs text-slate-400 font-mono">{step.score}</span>
                  </div>
                </div>

                {step.status === "IN_PROGRESS" ? (
                  <button
                    onClick={() => {
                      if (window.confetti) window.confetti({ particleCount: 60, spread: 50 });
                      alert("Automated Sandbox Audit Passed! Proof Card updated to 96 Score.");
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white text-xs font-bold"
                  >
                    Run Sandbox Audit
                  </button>
                ) : (
                  <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full ${
                    step.status === "COMPLETED" ? "text-emerald-300 bg-emerald-500/10" : "text-slate-500"
                  }`}>
                    {step.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </main>
      )}

      {/* VIEW 4: LIVING PROOF CARD PUBLIC PAGE */}
      {currentView === "proofcard" && (
        <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-white/10">
            <span className="text-xs font-mono text-cyan-300">Shareable Dossier: elevora.io/u/alexrivera</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => alert("Candidate added to recruiter shortlist!")}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white border border-white/10"
              >
                Shortlist Candidate
              </button>
              <button
                onClick={() => alert("Screen invitation sent to candidate!")}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white text-xs font-bold"
              >
                Schedule Technical Screen
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="glass-card p-8 border-cyan-400/40">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                    alt="Alex"
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-cyan-400"
                  />
                  <div>
                    <h2 className="font-display font-black text-2xl text-white">Alex Rivera</h2>
                    <p className="text-xs font-mono text-cyan-300">@alexrivera • San Francisco, CA</p>
                    <p className="text-sm text-slate-200 mt-1 font-medium">Full-Stack AI Systems Architect</p>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-xl bg-black/40 border border-white/10 font-mono text-xs text-slate-400 truncate">
                  SHA-256: 8f4a7c1b29d0e3a478c9e5b8a1f2349071cd8a12e345b89c7d01e4a56b7c89f0
                </div>
              </div>

              {/* Shipped Projects */}
              <div className="glass-card p-6">
                <h3 className="font-display font-bold text-lg text-white mb-4">Verified Shipped Capstones</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-display font-bold text-white">NeuroSync: Multi-Agent Workspace</h4>
                      <span className="text-xs font-mono text-cyan-300 font-bold">Audit Score: 96/100</span>
                    </div>
                    <p className="text-xs text-slate-300 mb-2">
                      Real-time canvas with distributed conflict resolution, WebSockets, and vector code generation.
                    </p>
                    <div className="text-[11px] font-mono text-slate-400">142 Commits • 94.8% Test Coverage • 99 Lighthouse</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <ProofCard tier="platinum" interactive={false} />
            </div>
          </div>
        </main>
      )}

      {/* VIEW 5: RECRUITER SEARCH */}
      {currentView === "recruiter" && (
        <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="pb-6 mb-8 border-b border-white/10">
            <span className="text-xs font-mono text-cyan-300 font-bold uppercase">Recruiter Intelligence</span>
            <h1 className="font-display font-black text-3xl text-white">Verified Candidate Directory</h1>
            <p className="text-slate-400 text-sm mt-1">Search pre-audited engineers by verified code test results.</p>
          </div>

          {/* Search bar */}
          <div className="glass-card p-4 mb-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Icon name="search" className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, role, or skill..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-2 pl-11 pr-4 text-xs text-white focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="flex items-center gap-2">
              {["All", "Gold", "Platinum", "Diamond"].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTier(t)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                    selectedTier === t ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40" : "bg-white/5 text-slate-400"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Candidates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "user-1", name: "Alex Rivera", role: "Full-Stack AI Systems", tier: "Platinum", score: 94, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80" },
              { id: "user-2", name: "Maya Chen", role: "Distributed Systems & Cloud", tier: "Diamond", score: 98, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80" },
              { id: "user-3", name: "David Kim", role: "Frontend Maestro & Motion", tier: "Gold", score: 89, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
            ].map((c) => (
              <div key={c.id} className="glass-card p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img src={c.img} alt={c.name} className="w-12 h-12 rounded-2xl object-cover border border-cyan-400/40" />
                    <div>
                      <h3 className="font-display font-bold text-base text-white">{c.name}</h3>
                      <span className="text-xs text-slate-400">{c.role}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.03] border border-white/5 my-3">
                    <span className="text-xs font-bold text-cyan-300">{c.tier} Tier</span>
                    <span className="text-xs font-mono font-bold text-white">{c.score}% Score</span>
                  </div>
                </div>

                <button
                  onClick={() => setCurrentView("proofcard")}
                  className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold mt-4"
                >
                  Inspect Proof Card →
                </button>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* VIEW 6: AI INTERVIEW COACH */}
      {currentView === "interview" && (
        <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="pb-6 mb-8 border-b border-white/10">
            <span className="text-xs font-mono text-cyan-300 font-bold uppercase">Technical Simulation</span>
            <h1 className="font-display font-black text-3xl text-white">Interactive Interview Coach</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 glass-card p-6 sm:p-8 border-cyan-400/30">
              <h3 className="font-display font-bold text-lg text-white mb-2">
                &quot;Design a live collaborative whiteboarding application with sub-50ms latency for 10,000 active rooms.&quot;
              </h3>

              {/* Speech Meter Simulation */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 my-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isRecording ? "bg-rose-500 text-white animate-pulse" : "bg-white/10 text-slate-300"
                    }`}
                  >
                    <Icon name={isRecording ? "mic" : "micOff"} className="w-5 h-5" />
                  </button>
                  <span className="text-xs font-semibold text-white">
                    {isRecording ? "Listening to Audio Stream..." : "Microphone Ready"}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  {[6, 12, 18, 24, 14, 20, 8, 16].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full ${isRecording ? "bg-cyan-400 animate-pulse" : "bg-white/20"}`}
                      style={{ height: isRecording ? `${h}px` : "6px" }}
                    />
                  ))}
                </div>
              </div>

              <textarea
                rows={6}
                value={interviewAnswer}
                onChange={(e) => setInterviewAnswer(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 text-xs sm:text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
              />

              <button
                onClick={handleSimulateEval}
                className="mt-4 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#22D3EE] text-white font-display font-bold text-xs"
              >
                Evaluate Response
              </button>
            </div>

            {/* Scorecard */}
            <div className="lg:col-span-5 glass-card p-6">
              <span className="text-xs font-mono font-bold uppercase text-cyan-300 block mb-3">Live Scorecard</span>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between mb-4">
                <span className="text-xs text-slate-300">Composite Score</span>
                <span className="font-display font-black text-2xl text-gradient-aurora">{feedback.overall}/100</span>
              </div>

              <div className="space-y-3 text-xs mb-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Clarity</span>
                    <span className="text-cyan-300 font-bold">{feedback.clarity}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full" style={{ width: `${feedback.clarity}%` }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Technical Accuracy</span>
                    <span className="text-cyan-300 font-bold">{feedback.technicalAccuracy}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${feedback.technicalAccuracy}%` }} />
                  </div>
                </div>
              </div>

              <div className="text-xs space-y-2 pt-2 border-t border-white/10">
                <span className="font-bold text-emerald-400 block">Strong Points:</span>
                <p className="text-slate-300 leading-relaxed">• {feedback.strengths[0]}</p>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* FOOTER */}
      <footer className="glass-panel border-t border-white/[0.08] py-8 px-4 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} ELEVORA Inc. &quot;Rise Beyond Potential.&quot; Verifiable Proof of Competency.</p>
      </footer>
    </div>
  );
}

// Render React App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ElevoraApp />);
