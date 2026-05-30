import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Obsidian — primary background
        background: "#0A0A0C",
        obsidian: {
          DEFAULT: "#0A0A0C",
          800: "#101014",
          700: "#16161B",
          600: "#1E1E25",
        },
        // Liquid Gold / Amber — primary accent (Bier-Assoziation)
        gold: {
          DEFAULT: "#F5A623",
          400: "#FFC25C",
          500: "#F5A623",
          600: "#D98B0E",
        },
        // Neon Cyan — secondary accent (Tech / Echtzeit-Assoziation)
        cyan: {
          DEFAULT: "#00E5FF",
          400: "#5CF0FF",
          500: "#00E5FF",
          600: "#00B8CC",
        },
        // Text
        foreground: "#F8F9FA",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "glow-gold": "0 0 60px -15px rgba(245, 166, 35, 0.55)",
        "glow-gold-sm": "0 0 30px -10px rgba(245, 166, 35, 0.45)",
        "glow-cyan": "0 0 60px -15px rgba(0, 229, 255, 0.5)",
        "glow-cyan-sm": "0 0 30px -10px rgba(0, 229, 255, 0.4)",
        "inset-border": "inset 0 0 0 1px rgba(255, 255, 255, 0.06)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-gold":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(245,166,35,0.18), transparent 70%)",
        "radial-cyan":
          "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(0,229,255,0.12), transparent 70%)",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 40s) linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
