/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: false,
        domains: [
            "images.unsplash.com",
            "tryntest.in",
            "res.cloudinary.com",
        ],
        minimumCacheTTL: 60,
        formats: ['image/webp'], // Prefer WebP for better performance
    },
    
    experimental: {
        optimizePackageImports: ['@/components'],
        serverActions: true,
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

    compiler: {
        removeConsole: process.env.NODE_ENV === "production" ? {
            exclude: ['error', 'warn'],
        } : false,
    },
    
    reactStrictMode: true,
};

export default nextConfig;
