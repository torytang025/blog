import { get } from "@vercel/edge-config";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },

  async redirects() {
    try {
      return (await get("redirects")) ?? [];
    } catch {
      return [];
    }
  },
};

module.exports = nextConfig;
