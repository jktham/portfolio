import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/portfolio",
  output: "export",
  experimental: { esmExternals: true },
};

export default nextConfig;
