import type { Config } from "tailwindcss";

const config : Config = {
  content: [
    "./source/**/*.{js,ts,jsx,tsx,mdx,css}",
    "../packages/core/source/**/*.{ts,tsx,js,jsx,css}",
    "../packages/theme/source/**/*.{ts,tsx,js,jsx,css}",
    "../packages/layout/source/**/*.{ts,tsx,js,jsx,css}",
    "../packages/typography/source/**/*.{ts,tsx,js,jsx,css}",
    "../../playground/nextjs/app/**/*.{ts,tsx,js,jsx,css}"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}

export default config