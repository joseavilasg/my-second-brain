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
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 1200 1227"
			>
				<path
					fill="#000"
					d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
				/>
			</svg>
		),
		link: "https://x.com/joseavilasg",
	},
	docsRepositoryBase: "https://github.com/joseavilasg/my-second-brain",
	footer: {
		component: <></>,
	},
	editLink: {
		component: ({ children, className, filePath }) => (
			<a
				className={className}
				href={`https://github.com/joseavilasg/my-second-brain/tree/main/${filePath}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		),
	},
};

export default config;
