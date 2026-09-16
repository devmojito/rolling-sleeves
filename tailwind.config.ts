import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Brand palette, taken from the Rolling Sleeves logo (espresso on cream).
        ink: "#1a1211",
        espresso: "#371c1b",
        cream: "#f5f0e6",
        sand: "#dad0c0",
        gold: {
          DEFAULT: "#dad0c0",
          light: "#f5f0e6",
          deep: "#371c1b",
        },
        navy: "#371c1b",
        surface: {
          DEFAULT: "#1a1211",
          dim: "#1a1211",
          bright: "#3a2c2a",
          container: "#221816",
          "container-low": "#1e1513",
          "container-lowest": "#140e0d",
          "container-high": "#2a1f1d",
          "container-highest": "#332725",
          variant: "#332725",
        },
        "on-surface": "#f5f0e6",
        "on-surface-variant": "#dad0c0",
        outline: {
          DEFAULT: "#a39689",
          variant: "#4d3f3b",
        },
        primary: {
          DEFAULT: "#f5f0e6",
          container: "#dad0c0",
        },
        "on-primary": "#371c1b",
        "on-primary-container": "#371c1b",
        // shadcn-compatible aliases driven by CSS variables
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        headline: ["var(--font-zilla)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        label: ["var(--font-manrope)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
