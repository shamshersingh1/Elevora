const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding Elevora database with realistic talent and proof cards...");

  // Clean existing records if any
  try {
    await prisma.activity.deleteMany({});
    await prisma.application.deleteMany({});
    await prisma.recruiterShortlist.deleteMany({});
    await prisma.verifiedSkill.deleteMany({});
    await prisma.proofCard.deleteMany({});
    await prisma.project.deleteMany({});
    await prisma.skillCheck.deleteMany({});
    await prisma.roadmapStep.deleteMany({});
    await prisma.roadmap.deleteMany({});
    await prisma.job.deleteMany({});
    await prisma.user.deleteMany({});
  } catch (e) {
    console.log("Tables empty or ready for first seed.");
  }

  // 1. Create Alex Rivera (Candidate)
  const alex = await prisma.user.create({
    data: {
      id: "user-alex-1",
      email: "alex@elevora.io",
      name: "Alex Rivera",
      username: "alexrivera",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      headline: "Full-Stack AI Engineer | Systems Thinker",
      bio: "Passionate about building production-grade web applications with generative AI capabilities and resilient cloud backends. Verified by 3 real-world projects and 6 live code audits.",
      role: "CANDIDATE",
      location: "San Francisco, CA (Open to Remote)",
      githubUrl: "https://github.com/alexrivera",
      linkedinUrl: "https://linkedin.com/in/alexrivera",
    },
  });

  // Proof Card for Alex
  const proofCard = await prisma.proofCard.create({
    data: {
      userId: alex.id,
      slug: "alexrivera",
      title: "Alex Rivera's Verified Engineering Record",
      overallLevel: "Platinum",
      levelScore: 94,
      verifiedHash: "sha256:8f4a7c1b29d0e3a478c9e5b8a1f2349071cd8a12e345b89c7d01e4a56b7c89f0",
      viewsCount: 14820,
      endorsementsCount: 342,
    },
  });

  // Verified Skills
  await prisma.verifiedSkill.createMany({
    data: [
      {
        proofCardId: proofCard.id,
        name: "React 19 & Next.js App Router",
        category: "Frontend",
        level: "Platinum",
        score: 96,
        assessorType: "Live Real-Time Code Execution",
        evidenceUrl: "https://github.com/alexrivera/neurosync",
      },
      {
        proofCardId: proofCard.id,
        name: "TypeScript Advanced Metaprogramming",
        category: "Frontend",
        level: "Platinum",
        score: 94,
        assessorType: "Interactive Typing Skill Check",
      },
      {
        proofCardId: proofCard.id,
        name: "Distributed Systems & Event Streams",
        category: "Backend",
        level: "Gold",
        score: 89,
        assessorType: "Kafka & Redis Simulation Audit",
      },
      {
        proofCardId: proofCard.id,
        name: "PostgreSQL & Prisma Vector Search",
        category: "Backend",
        level: "Platinum",
        score: 92,
        assessorType: "pgvector Query Performance Benchmark",
      },
      {
        proofCardId: proofCard.id,
        name: "LLM Orchestration & RAG Pipelines",
        category: "AI / ML",
        level: "Platinum",
        score: 95,
        assessorType: "Autonomous AI Coach Evaluation",
      },
      {
        proofCardId: proofCard.id,
        name: "Docker, CI/CD & Cloud Deployment",
        category: "DevOps",
        level: "Gold",
        score: 87,
        assessorType: "Automated Build Pipeline Verification",
      },
    ],
  });

  // Projects
  await prisma.project.createMany({
    data: [
      {
        userId: alex.id,
        title: "NeuroSync: Multi-Agent Real-time Workspace",
        description: "Collaborative canvas with distributed conflict resolution, live voice agents, and vector-backed instant code generation.",
        repoUrl: "https://github.com/alexrivera/neurosync",
        liveUrl: "https://neurosync.demo.elevora.io",
        techStack: JSON.stringify(["Next.js 14", "TypeScript", "Tailwind CSS", "WebSockets", "Prisma", "pgvector"]),
        status: "VERIFIED",
        aiReviewScore: 96,
        aiFeedback: "Flawless error boundaries, optimal optimistic UI updates, and sub-40ms WebSocket roundtrip under synthetic load tests.",
        verifiedAt: new Date(),
      },
      {
        userId: alex.id,
        title: "TraceFlow: High-Throughput Telemetry Engine",
        description: "Microservice stream processing millions of events per second with adaptive backpressure and zero-loss guarantees.",
        repoUrl: "https://github.com/alexrivera/traceflow",
        liveUrl: "https://traceflow.demo.elevora.io",
        techStack: JSON.stringify(["Go", "Node.js", "Redis Pub/Sub", "ClickHouse", "Docker"]),
        status: "VERIFIED",
        aiReviewScore: 92,
        aiFeedback: "Clean memory allocation profiling and robust worker pool retry logic. Benchmarked at 180k req/s.",
        verifiedAt: new Date(),
      },
    ],
  });

  // Activities
  await prisma.activity.createMany({
    data: [
      {
        userId: alex.id,
        type: "LEVELED_UP",
        title: "Leveled Up to Platinum Tier 4",
        description: "Surpassed 92+ average verified score across full-stack and systems benchmarks.",
      },
      {
        userId: alex.id,
        type: "SHIPPED_PROJECT",
        title: "Shipped NeuroSync Capstone",
        description: "Verified by automated benchmark suite and AI Architectural Auditor (Score: 96/100).",
      },
      {
        userId: alex.id,
        type: "PASSED_SKILL_CHECK",
        title: "Passed React 19 & Next.js Live Skill Check",
        description: "Solved 15/15 real-world concurrency challenges in 18 minutes (Top 2% percentile).",
      },
    ],
  });

  // Roadmap
  const roadmap = await prisma.roadmap.create({
    data: {
      id: "roadmap-fullstack-ai",
      title: "Full-Stack AI Systems Architect",
      slug: "full-stack-ai-architect",
      description: "From modern React concurrency and TypeScript type mastery to vector search, distributed state, and autonomous agent orchestration.",
      category: "Engineering",
      roleTarget: "Senior Full-Stack & AI Engineer",
      estimatedWeeks: 8,
      icon: "Cpu",
    },
  });

  await prisma.roadmapStep.createMany({
    data: [
      {
        roadmapId: roadmap.id,
        order: 1,
        title: "React 19 & Next.js Server Components",
        description: "Master streaming SSR, Server Actions, optimistic state mutations, and cache revalidation patterns.",
        type: "SKILL_CHECK",
        status: "COMPLETED",
        points: 150,
      },
      {
        roadmapId: roadmap.id,
        order: 2,
        title: "High-Performance TypeScript Systems",
        description: "Advanced conditional types, template literals, brand types, and zero-runtime overhead schemas.",
        type: "SKILL_CHECK",
        status: "COMPLETED",
        points: 150,
      },
      {
        roadmapId: roadmap.id,
        order: 3,
        title: "Real-Time Distributed Workspace (NeuroSync)",
        description: "Build and deploy a real-time collaborative workspace with WebSockets, CRDTs, and optimistic locking.",
        type: "PROJECT",
        status: "COMPLETED",
        points: 300,
      },
      {
        roadmapId: roadmap.id,
        order: 4,
        title: "Vector Embeddings & Semantic Search (pgvector)",
        description: "Implement high-dimensional vector search, HNSW indexing, and hybrid BM25 + embedding ranking.",
        type: "SKILL_CHECK",
        status: "COMPLETED",
        points: 200,
      },
      {
        roadmapId: roadmap.id,
        order: 5,
        title: "Multi-Agent LLM Orchestrator Capstone",
        description: "Create an autonomous multi-agent task runner with streaming tool calls, evaluation guardrails, and persistent memory.",
        type: "PROJECT",
        status: "IN_PROGRESS",
        points: 400,
      },
      {
        roadmapId: roadmap.id,
        order: 6,
        title: "Production Chaos & Load Hardening Audit",
        description: "Simulate network partitions, high-concurrency DDoS bursts, and automated fallback circuit breakers.",
        type: "AUDIT",
        status: "LOCKED",
        points: 250,
      },
    ],
  });

  // Jobs
  await prisma.job.createMany({
    data: [
      {
        id: "job-1",
        title: "Senior AI Systems Engineer",
        company: "Vercel",
        companyLogo: "https://avatar.vercel.sh/vercel",
        location: "San Francisco, CA / Remote",
        type: "Remote",
        salary: "$180k – $240k + Equity",
        minLevelRequired: "Gold",
        skillsRequired: "Next.js, TypeScript, Vector Search, LLM APIs",
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
        skillsRequired: "React, TypeScript, WebSockets, Optimistic UI",
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
        skillsRequired: "Go, Kafka, PostgreSQL, System Design",
        description: "Scale high-reliability payment primitives processing hundreds of billions in volume. Elevora verified applicants get immediate engineering review.",
        featured: false,
      },
    ],
  });

  console.log("Database seeded successfully with Elevora records!");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
