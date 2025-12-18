/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode
    reactStrictMode: true,

    // Optimize production builds with SWC minification
    swcMinify: true,

    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Modularize imports to reduce bundle size
    modularizeImports: {
        'antd': {
            transform: 'antd/es/{{member}}',
        },
    },

    // Performance optimizations
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['antd', '@ant-design/icons'],
    },

    // Image optimization with modern formats
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },

    // Compression for performance
    compress: true,

    // Production source maps disabled for performance
    productionBrowserSourceMaps: false,

    // Power optimizations
    poweredByHeader: false,
}

module.exports = nextConfig
