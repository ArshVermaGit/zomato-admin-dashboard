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

    transpilePackages: ['@zomato/ui', '@zomato/design-tokens', 'react-native-reanimated', 'react-native', 'expo-linear-gradient'],

    experimental: {
        // Turbopack configuration
        turbo: {
            resolveAlias: {
                'react-native': 'react-native-web',
            },
            resolveExtensions: [
                '.web.js',
                '.web.jsx',
                '.web.ts',
                '.web.tsx',
                '.js',
                '.jsx',
                '.ts',
                '.tsx',
            ],
        },
    },

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
