import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/profile',
  basePath: '/profile',
  output: 'export',
};

export default nextConfig;
