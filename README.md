# ELEVORA — "Rise Beyond Potential."

> **Elevora turns real work into a verified record that candidates can showcase and recruiters can trust.**  
> Users follow role roadmaps, pass live skill checks, and ship projects guided by an AI coach. All of it feeds into a living **"Proof Card"** with verified levels and activity.

---

## 🌟 Key Features

1. **Interactive Living Proof Card (`/u/[username]`)**
   - Cryptographic SHA-256 verification hash stamp.
   - Dynamic tiers from **Bronze**, **Silver**, **Gold**, **Platinum**, to **Diamond**.
   - 3D perspective mouse tilt, live level-up celebration with confetti, and shareable QR code dossier.
   - Real-time verified skills with code audit evidence and lighthouse/commit statistics.

2. **Node-Based Role Roadmaps (`/roadmap`)**
   - Visual milestone path (Locked, Unlocked, In-Progress, Completed states).
   - Live code skill checks inside isolated sandboxes.
   - Project capstone submission with automated AI pull request architectural review.

3. **Candidate Command Center (`/dashboard`)**
   - Active streak counter, profile views, and Proof Score radial progress dial.
   - Integrated 24/7 **AI Architectural Coach chat panel**.
   - Contribution activity heatmap matrix.
   - Direct job matches pre-qualified by verified proof tier.

4. **Recruiter Intelligence Engine (`/recruiter`)**
   - Search engine filtering candidates by verified score, technology stack, and level tier.
   - One-click shortlist management and interview fast-track invitations.
   - Zero resume fluff: instant access to raw commits and benchmark traces.

5. **AI Interview Coach & Job Simulation (`/interview`)**
   - Simulated speech visualizer and audio waveform stream.
   - Real-time scorecard measuring **Clarity**, **Technical Accuracy**, and **System Depth**.
   - Day-one production incident response challenges and staff engineer recommendation summaries.

6. **Split-Screen Authentication (`/login` & `/signup`)**
   - Interactive Proof Card aura preview on right.
   - One-click demo candidate and demo recruiter credentials.
   - Candidate vs. Recruiter role switching and Google OAuth integration.

---

## 🎨 Design System & Visual Identity

- **Aesthetic**: Dark-first with light mode toggle. Deep midnight background (`#0B0B14`), glowing aurora gradient accents (`#7C5CFF` violet to `#22D3EE` cyan to `#E879F9` magenta).
- **Typography**: Geometric display font (**Sora** / **Space Grotesk**) paired with **Inter** for clean readability.
- **Glassmorphism**: Backdrop blur (`blur-2xl`), subtle hairline borders (`rgba(124, 92, 255, 0.2)`), and ambient neon shadows.
- **Tokens File**: [`src/styles/tokens.ts`](src/styles/tokens.ts) holds all colors, proof tiers, typography, and spacing tokens.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS, custom glassmorphism utilities, and dark/light ThemeProvider
- **Animation**: Framer Motion scroll reveals, 3D tilt, and `canvas-confetti`
- **Database & ORM**: PostgreSQL-ready schema with SQLite local zero-config default via **Prisma ORM**
- **AI Engine**: Modular Next.js API routes (`/api/ai/coach`, `/api/ai/interview`) with Google Gemini / OpenAI integration support

---

## 🚀 Quickstart & Setup Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` (already created with local defaults):
```bash
cp .env.example .env
```

Contents of `.env`:
```env
# Local SQLite for immediate zero-config run
DATABASE_URL="file:./dev.db"

# Or configure PostgreSQL / Neon / Supabase:
# DATABASE_URL="postgresql://user:password@localhost:5432/elevora?schema=public"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="elevora-development-super-secret-key-38158"

# Optional LLM API keys for live AI Coach responses
GEMINI_API_KEY=""
OPENAI_API_KEY=""
```

### 3. Initialize & Seed Database
Sync the Prisma schema and populate the database with realistic candidate dossiers, roadmaps, and jobs:
```bash
# Push schema to database
npx prisma db push

# Seed with rich talent data
npm run db:seed
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Architecture

```
├── prisma/
│   ├── schema.prisma       # Prisma models (User, ProofCard, VerifiedSkill, Roadmap, etc.)
│   └── seed.js             # Seed script with realistic talent profiles
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with fonts & ThemeProvider
│   │   ├── page.tsx        # High-impact Landing Page
│   │   ├── login/          # Split-screen candidate/recruiter login
│   │   ├── signup/         # Split-screen signup with live card preview
│   │   ├── dashboard/      # Candidate Command Center & AI chat
│   │   ├── roadmap/        # Visual node-based role roadmaps
│   │   ├── recruiter/      # Talent search & shortlist management
│   │   ├── interview/      # AI speech & technical simulation
│   │   ├── u/[username]/   # Public shareable Proof Card dossier
│   │   └── api/            # API endpoints (AI coach, interview, candidates)
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── theme/          # ThemeProvider (Dark/Light toggle)
│   │   └── ui/             # Button, GlassCard, ProofCard, ProgressRing, RoadmapNode
│   ├── lib/
│   │   ├── prisma.ts       # Prisma Client singleton
│   │   ├── mockData.ts     # Realistic talent records & fallback data
│   │   └── utils.ts        # Helper functions & hash truncation
│   └── styles/
│       ├── globals.css     # Glassmorphism, aurora glows, scrollbars
│       └── tokens.ts       # Design system tokens (colors, tiers, typography)
```

---

## ⚡ Deployment

### Deploy to Vercel + Neon / Supabase:
1. Create a PostgreSQL database on [Neon](https://neon.tech) or [Supabase](https://supabase.com).
2. Set `DATABASE_URL` in your Vercel Project Settings to your Postgres connection string.
3. Update `datasource db` in `prisma/schema.prisma` provider to `"postgresql"`.
4. Deploy with `git push origin main`.
