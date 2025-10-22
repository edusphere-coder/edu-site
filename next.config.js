/** @type {import('next').NextConfig} */
// const nextConfig = {}
const nextConfig = {
    output: 'export',
    images: {
    unoptimized: true, // <-- disable optimization
  }, // tells Next.js to generate static HTML
  }
  
//   module.exports = nextConfig
module.exports = nextConfig
