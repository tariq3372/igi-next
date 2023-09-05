/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/en",
    distDir: 'dist',
    output: 'export',
}

module.exports = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/en',
          permanent: true,
        },
      ]
    },
  }
