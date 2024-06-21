// *@type {import('next').NextConfig}
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       // NextJS <Image> component needs to whitelist domains for src={}
//       "lh3.googleusercontent.com",
//       "pbs.twimg.com",
//       "images.unsplash.com",
//       "logos-world.net",
//     ],
//   },
// };
//
//
// module.exports = nextConfig;
// // next.config.js
// module.exports = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };


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
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint warnings during build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

