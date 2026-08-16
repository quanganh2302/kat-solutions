import type { NextConfig } from "next";

/**
 * Demo multi-zone proxy.
 *
 * Each entry is a slug served at `/demo/<slug>` that is proxied to its own Vercel
 * deployment (a separate Next.js app that serves itself under basePath `/demo/<slug>`).
 * The target origin is read from env `<SLUG>_DEMO_ORIGIN` (slug uppercased), e.g.
 * slug "vsa" -> env `VSA_DEMO_ORIGIN=https://lth-hethong.vercel.app`.
 *
 * To add a new demo:
 *   1. Add its slug to DEMO_ZONES below.
 *   2. Set env `<SLUG>_DEMO_ORIGIN` on the Kat Vercel project.
 *   3. Redeploy Kat.
 * See .claude/skills/add-demo-zone/SKILL.md for the full playbook.
 */
const DEMO_ZONES = ["asa"];

const nextConfig: NextConfig = {
  async rewrites() {
    const rules = [];
    for (const slug of DEMO_ZONES) {
      const origin = process.env[`${slug.toUpperCase()}_DEMO_ORIGIN`];
      if (!origin) continue; // zone disabled until its origin env is set
      rules.push(
        { source: `/demo/${slug}`, destination: `${origin}/demo/${slug}` },
        { source: `/demo/${slug}/:path*`, destination: `${origin}/demo/${slug}/:path*` },
      );
    }
    return rules;
  },
};

export default nextConfig;
