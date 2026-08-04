import type { NextConfig } from "next";

// Origin of the VSA demo (its own Vercel project), e.g. "https://vsa-demo.vercel.app".
// Set VSA_DEMO_ORIGIN in Vercel env; leave unset locally to disable the proxy.
const VSA_DEMO_ORIGIN = process.env.VSA_DEMO_ORIGIN;

const nextConfig: NextConfig = {
  async rewrites() {
    if (!VSA_DEMO_ORIGIN) return [];
    // Multi-zone: transparently proxy /demo/vsa/* to the VSA deployment (which serves
    // itself under basePath "/demo/vsa"), so katsolutions.com/demo/vsa runs the VSA app.
    return [
      { source: "/demo/vsa", destination: `${VSA_DEMO_ORIGIN}/demo/vsa` },
      { source: "/demo/vsa/:path*", destination: `${VSA_DEMO_ORIGIN}/demo/vsa/:path*` },
    ];
  },
};

export default nextConfig;
