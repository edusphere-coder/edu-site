// /** @type {import('next').NextConfig} */
// // const nextConfig = {}
// const nextConfig = {
//     output: 'export',
//     images: {
//     unoptimized: true, // <-- disable optimization
//   }, // tells Next.js to generate static HTML
//   }
  
// //   module.exports = nextConfig
// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // fine to keep this if you don’t use Vercel Image Optimization
  },
  output: 'standalone', // ✅ use standalone, not export
};

module.exports = nextConfig;
