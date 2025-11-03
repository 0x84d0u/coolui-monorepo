import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable Turbopack for faster development
  // experimental: {
  //   turbo: {
  //     rules: {
  //       "*.css": {
  //         loaders: ["@tailwindcss/postcss"],
  //       },
  //     },
  //   },
  // },
  
  // Transpile the theme package since it's in the monorepo
  transpilePackages: [
    "@coolui/core",
    "@coolui/theme",
    "@coolui/typography",
  ]};

export default nextConfig;
