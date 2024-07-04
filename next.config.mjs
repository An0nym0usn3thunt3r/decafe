/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i.pinimg.com',
            },
            {
                hostname: 'images.unsplash.com',
            }
        ]
    }
};

export default nextConfig;
