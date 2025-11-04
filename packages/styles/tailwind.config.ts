import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./source/**/*.{js,ts,jsx,tsx,mdx,css}",
    "../core/source/**/*.{ts,tsx,js,jsx}",
    "../theme/source/**/*.{ts,tsx,js,jsx}",
    "../layout/source/**/*.{ts,tsx,js,jsx}",
    "../typography/source/**/*.{ts,tsx,js,jsx}",
    "../../playground/*/app/**/*.{ts,tsx,js,jsx}",
    "../../playground/*/src/**/*.{ts,tsx,js,jsx}",
  ],
};

export default config;