export interface VerifiedSkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "AI / ML" | "DevOps" | "System Design";
  level: "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond";
  score: number;
  verifiedAt: string;
  assessorType: string;
  evidenceUrl?: string;
}

export interface ShippedProjectItem {
  id: string;
  title: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
  techStack: string[];
  status: "VERIFIED" | "IN_PROGRESS" | "SUBMITTED";
  aiReviewScore: number;
  aiFeedback: string;
  verifiedAt: string;
  stats: {
    commits: number;
    testCoverage: string;
    lighthouse: number;
  };
}

export interface CandidateProfile {
  id: string;
  name: string;
  username: string;
  avatar: string;
  headline: string;
  bio: string;
  location: string;
  overallLevel: "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond";
  levelScore: number;
  verifiedHash: string;
  viewsCount: number;
  endorsementsCount: number;
  githubUrl: string;
  linkedinUrl: string;
  targetRole: string;
  availability: "Immediate" | "2 Weeks Notice" | "Exploring Offers";
  skills: VerifiedSkillItem[];
  projects: ShippedProjectItem[];
  recentActivities: {
    id: string;
    type: "PASSED_SKILL_CHECK" | "SHIPPED_PROJECT" | "LEVELED_UP" | "BADGE_EARNED";
    title: string;
    description: string;
    timestamp: string;
  }[];
}

export const CURRENT_CANDIDATE: CandidateProfile = {
  id: "user-alex-1",
  name: "Alex Rivera",
  username: "alexrivera",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
  headline: "Full-Stack AI Engineer | Systems Thinker",
  bio: "Passionate about building production-grade web applications with generative AI capabilities and resilient cloud backends. Verified by 3 real-world projects and 6 live code audits.",
  location: "San Francisco, CA (Open to Remote)",
  overallLevel: "Platinum",
  levelScore: 94,
  verifiedHash: "sha256:8f4a7c1b29d0e3a478c9e5b8a1f2349071cd8a12e345b89c7d01e4a56b7c89f0",
  viewsCount: 14820,
  endorsementsCount: 342,
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  targetRole: "Senior Full-Stack / AI Engineer",
  availability: "Immediate",
  skills: [
    {
      id: "sk-1",
      name: "React 19 & Next.js App Router",
      category: "Frontend",
      level: "Platinum",
      score: 96,
      verifiedAt: "2 days ago",
      assessorType: "Live Real-Time Code Execution",
      evidenceUrl: "https://github.com/alexrivera/neurosync",
    },
    {
      id: "sk-2",
      name: "TypeScript Advanced Metaprogramming",
      category: "Frontend",
      level: "Platinum",
      score: 94,
      verifiedAt: "1 week ago",
      assessorType: "Interactive Typing Skill Check",
    },
    {
      id: "sk-3",
      name: "Distributed Systems & Event Streams",
      category: "Backend",
      level: "Gold",
      score: 89,
      verifiedAt: "2 weeks ago",
      assessorType: "Kafka & Redis Simulation Audit",
    },
    {
      id: "sk-4",
      name: "PostgreSQL & Prisma Vector Search",
      category: "Backend",
      level: "Platinum",
      score: 92,
      verifiedAt: "3 weeks ago",
      assessorType: "pgvector Query Performance Benchmark",
    },
    {
      id: "sk-5",
      name: "LLM Orchestration & RAG Pipelines",
      category: "AI / ML",
      level: "Platinum",
      score: 95,
      verifiedAt: "5 days ago",
      assessorType: "Autonomous AI Coach Evaluation",
    },
    {
      id: "sk-6",
      name: "Docker, CI/CD & Cloud Deployment",
      category: "DevOps",
      level: "Gold",
      score: 87,
      verifiedAt: "1 month ago",
      assessorType: "Automated Build Pipeline Verification",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "NeuroSync: Multi-Agent Real-time Workspace",
      description: "Collaborative canvas with distributed conflict resolution, live voice agents, and vector-backed instant code generation.",
      repoUrl: "https://github.com/alexrivera/neurosync",
      liveUrl: "https://neurosync.demo.elevora.io",
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebSockets", "Prisma", "pgvector"],
      status: "VERIFIED",
      aiReviewScore: 96,
      aiFeedback: "Flawless error boundaries, optimal optimistic UI updates, and sub-40ms WebSocket roundtrip under synthetic load tests.",
      verifiedAt: "Nov 12, 2026",
      stats: {
        commits: 142,
        testCoverage: "94.8%",
        lighthouse: 99,
      },
    },
    {
      id: "proj-2",
      title: "TraceFlow: High-Throughput Telemetry Engine",
      description: "Microservice stream processing millions of events per second with adaptive backpressure and zero-loss guarantees.",
      repoUrl: "https://github.com/alexrivera/traceflow",
      liveUrl: "https://traceflow.demo.elevora.io",
      techStack: ["Go", "Node.js", "Redis Pub/Sub", "ClickHouse", "Docker"],
      status: "VERIFIED",
      aiReviewScore: 92,
      aiFeedback: "Clean memory allocation profiling and robust worker pool retry logic. Benchmarked at 180k req/s.",
      verifiedAt: "Oct 28, 2026",
      stats: {
        commits: 89,
        testCoverage: "91.2%",
        lighthouse: 96,
      },
    },
    {
      id: "proj-3",
      title: "Lumina: AI Component Synthesizer",
      description: "Translates high-level product specifications into accessible, themeable React components with automated Jest tests.",
      repoUrl: "https://github.com/alexrivera/lumina",
      liveUrl: "https://lumina.demo.elevora.io",
      techStack: ["React", "Tailwind", "OpenAI / Claude API", "AST Parser"],
      status: "VERIFIED",
      aiReviewScore: 98,
      aiFeedback: "Exceptional code synthesis pipeline with automated AST lint validation and WCAG AAA compliance checks.",
      verifiedAt: "Oct 10, 2026",
      stats: {
        commits: 118,
        testCoverage: "97.5%",
        lighthouse: 100,
      },
    },
  ],
  recentActivities: [
    {
      id: "act-1",
      type: "LEVELED_UP",
      title: "Leveled Up to Platinum Tier 4",
      description: "Surpassed 92+ average verified score across full-stack and systems benchmarks.",
      timestamp: "Yesterday at 4:30 PM",
    },
    {
      id: "act-2",
      type: "SHIPPED_PROJECT",
      title: "Shipped NeuroSync Capstone",
      description: "Verified by automated benchmark suite and AI Architectural Auditor (Score: 96/100).",
      timestamp: "3 days ago",
    },
    {
      id: "act-3",
      type: "PASSED_SKILL_CHECK",
      title: "Passed React 19 & Next.js Live Skill Check",
      description: "Solved 15/15 real-world concurrency challenges in 18 minutes (Top 2% percentile).",
      timestamp: "5 days ago",
    },
    {
      id: "act-4",
      type: "BADGE_EARNED",
      title: "Earned 'Systems Architect' Verified Badge",
      description: "Validated high-availability cluster setup and disaster-recovery replication.",
      timestamp: "2 weeks ago",
    },
  ],
};

export const MOCK_CANDIDATES: CandidateProfile[] = [
  CURRENT_CANDIDATE,
  {
    id: "user-maya-2",
    name: "Maya Chen",
    username: "mayachen",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    headline: "Distributed Systems & Cloud Architect",
    bio: "Ex-fintech backend engineer specializing in high-frequency trading pipelines, Raft consensus, and Kubernetes operators.",
    location: "Seattle, WA (Remote)",
    overallLevel: "Diamond",
    levelScore: 98,
    verifiedHash: "sha256:3d91b4a0f8234c891e45672abf0912456e89712a3b4c5d6e7f8a9b0c1d2e3f4a",
    viewsCount: 22400,
    endorsementsCount: 512,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    targetRole: "Staff Distributed Systems Engineer",
    availability: "Exploring Offers",
    skills: [
      { id: "sk-m1", name: "Rust & Memory Safety", category: "Backend", level: "Diamond", score: 99, verifiedAt: "Yesterday", assessorType: "Live Kernel Stress Benchmark" },
      { id: "sk-m2", name: "Distributed Consensus (Raft/Paxos)", category: "System Design", level: "Diamond", score: 98, verifiedAt: "4 days ago", assessorType: "Jepsen Test Verification" },
      { id: "sk-m3", name: "Kubernetes Operators & CRDs", category: "DevOps", level: "Platinum", score: 96, verifiedAt: "2 weeks ago", assessorType: "Cluster Simulation Check" },
    ],
    projects: [
      {
        id: "proj-m1",
        title: "AetherDB: Embedded Distributed Key-Value Store",
        description: "LSM-tree storage engine in Rust with write-ahead logging and Raft replication.",
        repoUrl: "https://github.com",
        liveUrl: "https://aetherdb.demo.elevora.io",
        techStack: ["Rust", "Raft", "Tokio", "gRPC"],
        status: "VERIFIED",
        aiReviewScore: 99,
        aiFeedback: "Zero unsafe blocks used outside memory-mapped IO. Linearizable read benchmarks verified.",
        verifiedAt: "Nov 01, 2026",
        stats: { commits: 310, testCoverage: "98.2%", lighthouse: 100 },
      },
    ],
    recentActivities: [],
  },
  {
    id: "user-david-3",
    name: "David Kim",
    username: "davidkim",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    headline: "Frontend Maestro & Creative Technologist",
    bio: "Obsessed with buttery 60fps micro-interactions, WebGL shaders, and ultra-accessible design systems.",
    location: "New York, NY",
    overallLevel: "Gold",
    levelScore: 89,
    verifiedHash: "sha256:9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b",
    viewsCount: 9800,
    endorsementsCount: 198,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    targetRole: "Design Technologist / Senior Frontend",
    availability: "Immediate",
    skills: [
      { id: "sk-d1", name: "WebGL & Three.js Shaders", category: "Frontend", level: "Gold", score: 88, verifiedAt: "3 days ago", assessorType: "Shader Performance Test" },
      { id: "sk-d2", name: "Framer Motion & Micro-interactions", category: "Frontend", level: "Platinum", score: 95, verifiedAt: "1 week ago", assessorType: "Frame Drop & Rendering Test" },
      { id: "sk-d3", name: "WCAG AAA Accessibility Audit", category: "Frontend", level: "Gold", score: 90, verifiedAt: "2 weeks ago", assessorType: "Screen Reader Automated Pass" },
    ],
    projects: [],
    recentActivities: [],
  },
  {
    id: "user-sofia-4",
    name: "Sofia Patel",
    username: "sofiapatel",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    headline: "Autonomous AI Agent & RAG Architect",
    bio: "Bridging foundational models with production workflows. Experienced in fine-tuning, latency optimization, and guardrails.",
    location: "Austin, TX (Remote)",
    overallLevel: "Platinum",
    levelScore: 95,
    verifiedHash: "sha256:71a2c3b4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2",
    viewsCount: 16400,
    endorsementsCount: 420,
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    targetRole: "AI / LLM Systems Engineer",
    availability: "2 Weeks Notice",
    skills: [
      { id: "sk-s1", name: "Multi-Agent Workflows (LangGraph/Autogen)", category: "AI / ML", level: "Platinum", score: 96, verifiedAt: "Yesterday", assessorType: "Simulated Agent Benchmark" },
      { id: "sk-s2", name: "Vector Index Tuning & Hybrid Search", category: "AI / ML", level: "Platinum", score: 94, verifiedAt: "5 days ago", assessorType: "Recall & MRR Benchmark" },
      { id: "sk-s3", name: "Python Async & FastAPI", category: "Backend", level: "Platinum", score: 93, verifiedAt: "2 weeks ago", assessorType: "Load Stress Test" },
    ],
    projects: [],
    recentActivities: [],
  },
];

export const ROADMAP_DATA = {
  id: "roadmap-fullstack-ai",
  title: "Full-Stack AI Systems Architect",
  slug: "full-stack-ai-architect",
  description: "From modern React concurrency and TypeScript type mastery to vector search, distributed state, and autonomous agent orchestration.",
  category: "Engineering",
  roleTarget: "Senior Full-Stack & AI Engineer",
  estimatedWeeks: 8,
  progressPercent: 68,
  steps: [
    {
      id: "step-1",
      order: 1,
      title: "React 19 & Next.js Server Components",
      description: "Master streaming SSR, Server Actions, optimistic state mutations, and cache revalidation patterns.",
      type: "SKILL_CHECK",
      status: "COMPLETED",
      points: 150,
      score: 96,
      badgeText: "Verified Score: 96/100",
      skillsGained: ["React 19", "Server Components", "Next.js App Router"],
    },
    {
      id: "step-2",
      order: 2,
      title: "High-Performance TypeScript Systems",
      description: "Advanced conditional types, template literals, brand types, and zero-runtime overhead schemas.",
      type: "SKILL_CHECK",
      status: "COMPLETED",
      points: 150,
      score: 94,
      badgeText: "Verified Score: 94/100",
      skillsGained: ["TypeScript Metaprogramming", "Zod Validation"],
    },
    {
      id: "step-3",
      order: 3,
      title: "Real-Time Distributed Workspace (NeuroSync)",
      description: "Build and deploy a real-time collaborative workspace with WebSockets, CRDTs, and optimistic locking.",
      type: "PROJECT",
      status: "COMPLETED",
      points: 300,
      score: 96,
      badgeText: "Project Shipped & Verified",
      skillsGained: ["WebSockets", "Conflict Resolution", "State Sync"],
    },
    {
      id: "step-4",
      order: 4,
      title: "Vector Embeddings & Semantic Search (pgvector)",
      description: "Implement high-dimensional vector search, HNSW indexing, and hybrid BM25 + embedding ranking.",
      type: "SKILL_CHECK",
      status: "COMPLETED",
      points: 200,
      score: 92,
      badgeText: "Verified Score: 92/100",
      skillsGained: ["pgvector", "Embeddings", "Hybrid Retrieval"],
    },
    {
      id: "step-5",
      order: 5,
      title: "Multi-Agent LLM Orchestrator Capstone",
      description: "Create an autonomous multi-agent task runner with streaming tool calls, evaluation guardrails, and persistent memory.",
      type: "PROJECT",
      status: "IN_PROGRESS",
      points: 400,
      score: null,
      badgeText: "Current Step (85% Done)",
      skillsGained: ["Agent Orchestration", "Function Calling", "Guardrails"],
    },
    {
      id: "step-6",
      order: 6,
      title: "Production Chaos & Load Hardening Audit",
      description: "Simulate network partitions, high-concurrency DDoS bursts, and automated fallback circuit breakers.",
      type: "AUDIT",
      status: "LOCKED",
      points: 250,
      score: null,
      badgeText: "Unlocks at Step 5 completion",
      skillsGained: ["Chaos Engineering", "Rate Limiting", "Observability"],
    },
    {
      id: "step-7",
      order: 7,
      title: "Final Technical Board & Elevora Proof Stamp",
      description: "Live interactive interview simulation with Elevora AI Technical Director and automated Proof Card level elevation.",
      type: "AUDIT",
      status: "LOCKED",
      points: 500,
      score: null,
      badgeText: "Final Proof Stamp",
      skillsGained: ["Architectural Defense", "Proof Certification"],
    },
  ],
};

export const MOCK_JOBS = [
  {
    id: "job-1",
    title: "Senior AI Systems Engineer",
    company: "Vercel",
    companyLogo: "https://avatar.vercel.sh/vercel",
    location: "San Francisco, CA / Remote",
    type: "Remote",
    salary: "$180k – $240k + Equity",
    minLevelRequired: "Gold",
    matchScore: 98,
    skillsRequired: ["Next.js", "TypeScript", "Vector Search", "LLM APIs"],
    description: "Looking for engineers who have shipped verified production Next.js apps with streaming AI interfaces. Skip the recruiter screen with Elevora Proof Card.",
    featured: true,
  },
  {
    id: "job-2",
    title: "Full-Stack Product Engineer",
    company: "Linear",
    companyLogo: "https://avatar.vercel.sh/linear",
    location: "San Francisco, CA / Remote",
    type: "Remote",
    salary: "$175k – $230k + Equity",
    minLevelRequired: "Platinum",
    matchScore: 94,
    skillsRequired: ["React", "TypeScript", "WebSockets", "Optimistic UI"],
    description: "Build lightning-fast productivity software. We value real craft, keyboard navigation, and verified architectural rigor over standard resumes.",
    featured: true,
  },
  {
    id: "job-3",
    title: "Distributed Infrastructure Engineer",
    company: "Stripe",
    companyLogo: "https://avatar.vercel.sh/stripe",
    location: "Seattle, WA / Hybrid",
    type: "Hybrid",
    salary: "$195k – $265k + 0.1% Equity",
    minLevelRequired: "Platinum",
    matchScore: 91,
    skillsRequired: ["Go", "Kafka", "PostgreSQL", "System Design"],
    description: "Scale high-reliability payment primitives processing hundreds of billions in volume. Elevora verified applicants get immediate engineering review.",
    featured: false,
  },
  {
    id: "job-4",
    title: "AI Agent Platform Engineer",
    company: "Cursor",
    companyLogo: "https://avatar.vercel.sh/cursor",
    location: "San Francisco, CA",
    type: "Onsite / Hybrid",
    salary: "$200k – $280k + Substantial Equity",
    minLevelRequired: "Gold",
    matchScore: 96,
    skillsRequired: ["TypeScript", "Python", "RAG", "Code Generation"],
    description: "Empower millions of developers through autonomous AI programming. We look for builders with verified hands-on projects and deep code intuition.",
    featured: true,
  },
];

export const TESTIMONIALS = [
  {
    id: "t-1",
    name: "Elena Rostova",
    role: "Senior Full-Stack Engineer at Supabase",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "I was a self-taught engineer rejected by 200 resume filters. With Elevora, I proved my skills through 2 verified projects. A hiring manager messaged me directly after seeing my Proof Card.",
    tier: "Platinum",
  },
  {
    id: "t-2",
    name: "Marcus Vance",
    role: "Founding Engineer at Seed-Stage AI Startup",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "The live skill checks and AI Coach pushed me to build 10x cleaner architectures. Elevora replaced months of anxiety with incontrovertible proof.",
    tier: "Diamond",
  },
  {
    id: "t-3",
    name: "Sarah Lindqvist",
    role: "Head of Engineering at Scale AI",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    quote: "Resumes are 80% buzzwords. When an applicant shares an Elevora Proof Card with verified test benchmarks and code hashes, we fast-track them to final rounds in 48 hours.",
    tier: "Recruiter Partner",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What makes the Elevora Proof Card different from a resume or LinkedIn?",
    answer: "A resume is an unverified list of claims. The Elevora Proof Card is a living, cryptographic record of verified competency. Every skill badge is backed by live code checks, benchmark tests, and projects audited by automated sandboxes and AI architects. Recruiters can inspect the exact score, commit hashes, and test coverage.",
  },
  {
    question: "How do the Live Skill Checks work?",
    answer: "Instead of leetcode trivia, Elevora's skill checks assess real-world engineering tasks: diagnosing race conditions, refactoring server components, querying vector databases, or resolving distributed cache invalidations in real time.",
  },
  {
    question: "What role does the AI Coach play?",
    answer: "Your AI Coach acts as a senior staff engineer sitting beside you. It reviews your architecture, performs line-by-line pull request audits, asks challenging system design trade-off questions, and guides you toward production-grade standards.",
  },
  {
    question: "How do recruiters use Elevora?",
    answer: "Recruiters and hiring managers search by verified skill levels (e.g. Gold+ in Next.js and PostgreSQL) rather than university pedigree or years on a resume. They can shortlist candidates, inspect verified evidence, and schedule screens directly.",
  },
  {
    question: "Can I use Elevora if I am transitioning from another field?",
    answer: "Absolutely! Elevora was built specifically for students, freshers, and career switchers. Roadmaps take you from foundational understanding to shipping production-level projects that prove your capabilities undeniably.",
  },
];
