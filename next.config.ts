import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ir.iitism.ac.in',
      },
    ],
  },
};

export default nextConfig;
