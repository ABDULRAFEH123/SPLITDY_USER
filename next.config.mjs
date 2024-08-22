/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  async redirects() {
    return [
      // Redirect from root to /places-to-visit
      {
        source: '/',
        destination: '/places-to-visit',
        permanent: false,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'backend.bntr.ai',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'profile-user.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
