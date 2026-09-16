import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aymyogaschool.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.22",
        port: "5000",
        pathname: "/uploads/**",
      },
    ],
    dangerouslyAllowSVG: true,
   
    minimumCacheTTL: 2678400,
  },

  reactStrictMode: false,
};

export default nextConfig;