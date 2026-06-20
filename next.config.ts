import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  trailingSlash: true,
  basePath: "/neo-portfolio",
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
