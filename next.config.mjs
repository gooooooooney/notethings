import createJiti from "jiti";
import path from "path";

const jiti = createJiti(new URL(import.meta.url).pathname);
jiti(path.resolve("./lib/env.ts"));

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
    },
    experimental: {
        serverComponentsExternalPackages: ["@zenstackhq/runtime"],
    }

};

export default nextConfig;
