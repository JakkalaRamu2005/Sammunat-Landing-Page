/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better development
    reactStrictMode: true,

    // Optimize production builds
    swcMinify: true,

    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Performance optimizations
    experimental: {
        optimizeCss: true,
    },

    // Image optimization
    images: {
        formats: ['image/webp', 'image/avif'],
    },
}

module.exports = nextConfig
