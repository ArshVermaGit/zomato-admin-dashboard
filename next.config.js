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
    transpilePackages: ['@zomato/ui', '@zomato/design-tokens', 'react-native-reanimated', 'react-native', 'expo-linear-gradient'],
    webpack: (config) => {
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
    // Add rewrites if needed
    async rewrites() {
        return [
            // {
            //   source: '/api/:path*',
            //   destination: 'http://localhost:3000/api/:path*',
            // },
        ];
    },
};

module.exports = nextConfig;
