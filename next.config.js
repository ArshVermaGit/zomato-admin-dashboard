const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    // Tracing dependencies in a monorepo
    outputFileTracingRoot: path.join(__dirname, '../../'),

    transpilePackages: ['@zomato/ui', '@zomato/api-client', '@zomato/design-tokens', 'react-map-gl', 'mapbox-gl', 'react-native-reanimated', 'react-native', 'expo-linear-gradient'],

    experimental: {},

    turbopack: {},

    webpack: (config) => {
        // Fallback for Webpack mode
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            'react-native$': 'react-native-web',
        };
        config.resolve.extensions = [
            '.web.js',
            '.web.jsx',
            '.web.ts',
            '.web.tsx',
            ...config.resolve.extensions,
        ];
        return config;
    },

    async rewrites() {
        return [];
    },
};

module.exports = nextConfig;
