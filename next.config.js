/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  },
  typescript: {
    // Disable type checking during build
    ignoreBuildErrors: false,
  },
  eslint: {
    // Disable ESLint warnings during build
    ignoreDuringBuilds: false,
  },
};

module.exports = nextConfig;
