/**
 * @type {import('next').NextConfig}
*/

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
});

const nextConfig = {
  images: {
    domains: ['spblog.net'],
  }
}

module.exports = withNextra(nextConfig)
