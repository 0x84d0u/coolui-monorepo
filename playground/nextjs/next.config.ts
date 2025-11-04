import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@coolui/core",
    "@coolui/theme",
    "@coolui/typography",
    "@coolui/layout",
    "@coolui/styles",
  ],
};

export default nextConfig;