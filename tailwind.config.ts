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
        // Brand palette - extracted from the Stitch designs
        ink: "#1a1a1a",
        cream: "#f5f0eb",
        gold: {
          DEFAULT: "#E8A020",
          light: "#FFBE5B",
          deep: "#5b3b00",
        },
        navy: "#1B2A4A",
        // Material-3 tonal system
        surface: {
          DEFAULT: "#131313",
          dim: "#131313",
          bright: "#393939",
          container: "#20201f",
          "container-low": "#1c1b1b",
          "container-lowest": "#0e0e0e",
          "container-high": "#2a2a2a",
          "container-highest": "#353535",
          variant: "#353535",
        },
        "on-surface": "#e5e2e1",
        "on-surface-variant": "#d6c4ae",
        outline: {
          DEFAULT: "#9e8e7a",
          variant: "#514534",
        },
        primary: {
          DEFAULT: "#ffbe5b",
          container: "#e8a020",
        },
        "on-primary": "#442b00",
        "on-primary-container": "#5b3b00",
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
        headline: ["var(--font-epilogue)", "sans-serif"],
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
