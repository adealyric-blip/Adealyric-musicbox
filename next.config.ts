import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: ["https://*.space-z.ai", "http://21.0.3.82:3000", "http://localhost:3000"],
};

export default nextConfig;
