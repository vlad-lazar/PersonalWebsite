import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // This is the new configuration to accept images from any host
    remotePatterns: [
      {
        protocol: "http", // Allow HTTP (for local testing or specific cases)
        hostname: "**", // Wildcard for any hostname
        port: "", // Any port
        pathname: "**", // Any path
      },
      {
        protocol: "https", // Allow HTTPS (recommended for production)
        hostname: "**", // Wildcard for any hostname
        port: "", // Any port
        pathname: "**", // Any path
      },
    ],
  },
};

export default nextConfig;
