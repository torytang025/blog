import { get } from "@vercel/edge-config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
    unoptimized: true,
  },

  reactStrictMode: false,

  async redirects() {
    try {
      return (await get("redirects")) ?? [];
    } catch {
      return [];
    }
  },
};

export default nextConfig;
