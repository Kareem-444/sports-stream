import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      // ممكن تضيف مواقع صور أخرى هنا زى:
      // {
      //   protocol: "https",
      //   hostname: "images.unsplash.com",
      // },
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      // },
    ],
  },
};

export default nextConfig;