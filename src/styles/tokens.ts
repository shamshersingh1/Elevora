/**
 * ELEVORA DESIGN SYSTEM TOKENS
 * "Rise Beyond Potential"
 */

export const tokens = {
  colors: {
    midnight: "#0B0B14",
    dark: "#0F0F1D",
    surface: "#151528",
    surfaceAlt: "#1B1B33",
    cardBg: "rgba(21, 21, 40, 0.72)",
    border: "rgba(124, 92, 255, 0.2)",
    borderHover: "rgba(34, 211, 238, 0.45)",

    // Brand Gradients & Accents
    violet: "#7C5CFF",
    violetGlow: "rgba(124, 92, 255, 0.4)",
    cyan: "#22D3EE",
    cyanGlow: "rgba(34, 211, 238, 0.4)",
    magenta: "#E879F9",
    rose: "#F43F5E",
    emerald: "#10B981",
    amber: "#F59E0B",

    // Proof Card Verified Tiers
    proofTiers: {
      bronze: {
        label: "Bronze",
        hex: "#CD7F32",
        glow: "rgba(205, 127, 50, 0.35)",
        border: "border-amber-700/50",
        badge: "from-amber-700/30 to-amber-900/40 text-amber-300",
        minScore: 40,
      },
      silver: {
        label: "Silver",
        hex: "#94A3B8",
        glow: "rgba(148, 163, 184, 0.35)",
        border: "border-slate-400/50",
        badge: "from-slate-400/30 to-slate-600/40 text-slate-200",
        minScore: 60,
      },
      gold: {
        label: "Gold",
        hex: "#F59E0B",
        glow: "rgba(245, 158, 11, 0.45)",
        border: "border-amber-400/60",
        badge: "from-amber-400/30 to-yellow-600/40 text-amber-200",
        minScore: 80,
      },
      platinum: {
        label: "Platinum",
        hex: "#38BDF8",
        glow: "rgba(56, 189, 248, 0.5)",
        border: "border-cyan-400/60",
        badge: "from-cyan-400/30 to-blue-600/40 text-cyan-200",
        minScore: 92,
      },
      diamond: {
        label: "Diamond",
        hex: "#C084FC",
        glow: "rgba(192, 132, 252, 0.6)",
        border: "border-purple-400/70",
        badge: "from-purple-400/30 to-pink-600/40 text-purple-200",
        minScore: 98,
      },
    },
  },

  typography: {
    fontSans: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontDisplay: "Sora, Space Grotesk, system-ui, sans-serif",
    fontMono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem",
    section: "6rem",
  },

  borderRadius: {
    lg: "0.75rem",
    xl: "1rem",
    "2xl": "1.25rem",
    "3xl": "1.75rem",
    full: "9999px",
  },

  shadows: {
    glowViolet: "0 0 35px -8px rgba(124, 92, 255, 0.35)",
    glowCyan: "0 0 30px -8px rgba(34, 211, 238, 0.35)",
    cardElevated: "0 20px 45px -15px rgba(0, 0, 0, 0.6), 0 0 25px -5px rgba(124, 92, 255, 0.15)",
  },
} as const;

export type ProofTierLevel = keyof typeof tokens.colors.proofTiers;
