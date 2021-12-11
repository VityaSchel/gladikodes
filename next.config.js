module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/:imageId(\\d+)(\\.png)',
        destination: '/images/:imageId.png',
        permanent: true,
      },
      {
        source: '/:imageId(\\d+)',
        destination: '/images/:imageId.png',
        permanent: true,
      },
    ]
  },
}
