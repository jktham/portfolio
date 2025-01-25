import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  output: "export",
  experimental: { esmExternals: true },
};

export default nextConfig;
