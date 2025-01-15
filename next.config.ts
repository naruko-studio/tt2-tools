import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/tt2tools",
  assetPrefix: "/tt2tools/",
  trailingSlash: true,
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
