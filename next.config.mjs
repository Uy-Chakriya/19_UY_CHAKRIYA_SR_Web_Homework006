// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
// };

// // next.config.js
// module.exports = {
//   images: {
//     domains: ['i.pinimg.com'],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns: [
    
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  }

};

export default nextConfig;
