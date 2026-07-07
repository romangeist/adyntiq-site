import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        brand: "#2563EB",
        brandDark: "#1E40AF",
        accent: "#22C55E",
        mist: "#EEF5FF",
        slate: "#101827"
      },
      boxShadow: { soft: "0 24px 80px rgba(15, 23, 42, 0.10)" }
    }
  },
  plugins: []
} satisfies Config;
