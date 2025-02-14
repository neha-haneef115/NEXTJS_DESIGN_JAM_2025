import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
