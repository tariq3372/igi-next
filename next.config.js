/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/en",
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
