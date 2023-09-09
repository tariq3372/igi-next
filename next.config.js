/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/en",
    output: "export",
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
