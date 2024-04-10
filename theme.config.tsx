import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: (
		<span>
			<b>José Avila SG</b> - My Second Brain
		</span>
	),
	project: {
		link: "https://github.com/joseavilasg/my-second-brain",
	},
	chat: {
		link: "https://discord.com",
	},
	docsRepositoryBase: "https://github.com/joseavilasg/my-second-brain",
	footer: {
		component: <></>,
	},
};

export default config;
