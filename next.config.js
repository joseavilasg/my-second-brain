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
		domains: [
			"spblog.net",
			"marcolenzo.eu",
			"cdn.sstatic.net",
			"i.ytimg.com",
		],
	},
};

module.exports = withNextra(nextConfig);
