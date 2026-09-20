import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/connexion-app",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
