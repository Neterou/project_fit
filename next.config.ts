import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix for turbopack workspace root issue
  webpack: (config) => {
    config.resolve.symlinks = false;
    return config;
  },
};

export default nextConfig;
