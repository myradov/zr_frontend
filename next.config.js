/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ["localhost"]
  },
  i18n: {
    locales: ['en', 'ru', 'tm'],
    defaultLocale: 'en',
  },
};