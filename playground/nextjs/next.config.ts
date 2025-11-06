import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@coolui/styles",
    "@coolui/core",
    "@coolui/application",
    "@coolui/typography",
  ],
};

export default nextConfig;