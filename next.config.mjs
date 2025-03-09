/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'tryntest.in',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
        ],
        minimumCacheTTL: 60,
    },
    
    experimental: {
        optimizePackageImports: ['@/components'],
    },

    headers: async () => {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ];
    },
    
    swcMinify: true,
    
    reactStrictMode: true,
};

export default nextConfig;
