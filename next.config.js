/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['strapi-bucket-7846-3875-7103.s3.us-east-2.amazonaws.com'],
  },
}

module.exports = nextConfig
