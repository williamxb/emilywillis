import { withNextVideo } from 'next-video/process';
 
const nextConfig: import('next').NextConfig = {
    images: {
        qualities: [50, 75, 100]
    }
};
 
export default withNextVideo(nextConfig);
