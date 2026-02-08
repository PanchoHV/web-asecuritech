/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-dc06325214ac4e9a8959030cf5f65654.r2.dev',
      },
    ],
  },
};

export default nextConfig;
