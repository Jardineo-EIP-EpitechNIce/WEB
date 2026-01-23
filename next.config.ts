import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Enable static export for deployment flexibility
  // Remove 'output: export' if you need API routes or dynamic rendering
};

export default nextConfig;
