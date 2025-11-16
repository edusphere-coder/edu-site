/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,
  },

  // VERY IMPORTANT
  output: 'export',
};

module.exports = nextConfig;
