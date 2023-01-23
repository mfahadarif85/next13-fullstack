/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["github.com", "unsplash.com"],
  },
};

module.exports = nextConfig;
