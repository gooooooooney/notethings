import createJiti from "jiti";

const jiti = createJiti(new URL(import.meta.url).pathname);
jiti("./lib/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'img.clerk.com',
                protocol: 'https',
                port: '',
            }
        ]
    }
};

export default nextConfig;
