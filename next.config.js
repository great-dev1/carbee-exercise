/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://backend.billowing-truth-38ad.workers.dev/api/:path*',
      },
    ]
  }
}

module.exports = nextConfig
