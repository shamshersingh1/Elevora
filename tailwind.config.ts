import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        elevora: {
          midnight: "#0B0B14",
          dark: "#0F0F1D",
          surface: "#151528",
          card: "rgba(21, 21, 40, 0.65)",
          border: "rgba(124, 92, 255, 0.18)",
          borderHover: "rgba(34, 211, 238, 0.4)",
          violet: "#7C5CFF",
          cyan: "#22D3EE",
          magenta: "#E879F9",
          rose: "#F43F5E",
          emerald: "#10B981",
          amber: "#F59E0B",
        },
        proof: {
          bronze: "#CD7F32",
          silver: "#94A3B8",
          gold: "#F59E0B",
          platinum: "#38BDF8",
          diamond: "#A855F7",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "elevora-glow": "radial-gradient(circle at 50% 0%, rgba(124, 92, 255, 0.22) 0%, rgba(34, 211, 238, 0.12) 40%, transparent 70%)",
        "elevora-aurora": "linear-gradient(135deg, rgba(124, 92, 255, 0.15) 0%, rgba(34, 211, 238, 0.1) 50%, rgba(232, 121, 249, 0.12) 100%)",
        "elevora-card-glow": "linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "-apple-system", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "Space Grotesk", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 5s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2.5s infinite",
        "glow-spin": "spin 12s linear infinite",
        "aurora": "aurora 8s ease infinite alternate",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        aurora: {
          "0%": { opacity: "0.5", transform: "scale(1) rotate(0deg)" },
          "100%": { opacity: "0.85", transform: "scale(1.08) rotate(5deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "elevora-glow": "0 0 40px -10px rgba(124, 92, 255, 0.35)",
        "elevora-cyan": "0 0 35px -8px rgba(34, 211, 238, 0.35)",
        "elevora-card": "0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(124, 92, 255, 0.1)",
        "elevora-card-hover": "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px 2px rgba(34, 211, 238, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
