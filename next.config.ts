import type { NextConfig } from 'next'
import { withNextVideo } from 'next-video/process';
 
const nextConfig: import('next').NextConfig = {};
 
export default withNextVideo(nextConfig);
