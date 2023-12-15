const nextConfig = {
  output: 'export',
  experimental: {
    scrollRestoration: true,
  },
  env: {
    BASE_URL: 'https://pranjaldubey.com',
  },
  images: {
    loader: 'custom',
  },
}

module.exports = nextConfig
