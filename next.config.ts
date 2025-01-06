import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
};

const { withNextVideo } = require("next-video/process");

module.exports = withNextVideo(nextConfig, {
  provider: "vercel-blob",
});

export default nextConfig