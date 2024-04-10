import axios from "axios";
import { load } from "cheerio";

export type LinkPreviewData = {
	url?: string | string[];
	title?: string;
	favicon?: string;
	description?: string;
	image?: string;
	author?: string;
};

const fetchLinkPreview = async (url: string): Promise<LinkPreviewData> => {
	try {
		/*request url html document*/
		const { data } = await axios.get(url as string);
		//load html document in cheerio
		const $ = load(data);

		/*function to get needed values from meta tags to generate preview*/
		const getMetaTag = (name: string) => {
			return (
				$(`meta[name=${name}]`).attr("content") ||
				$(`meta[name=${name.toLowerCase()}]`).attr("content") ||
				$(`meta[propety="twitter${name}"]`).attr("content") ||
				$(`meta[propety="twitter${name.toLowerCase()}"]`).attr("content") ||
				$(`meta[property="og:${name}"]`).attr("content") ||
				$(`meta[property="og:${name.toLowerCase()}"]`).attr("content")
			);
		};

		const urlObj = new URL(url as string);
		let favicon =
			$('link[rel="shortcut icon"]').attr("href") ||
			$('link[rel="alternate icon"]').attr("href") ||
			$('link[rel="icon"]').attr("href");

		if (favicon?.includes("//") === false && favicon?.includes("http") === false) {
			if (favicon?.startsWith("/")) {
				favicon = `${urlObj.protocol}//${urlObj.host}/${favicon}`;
			} else {
				favicon = `${urlObj.protocol}//${urlObj.host}/${urlObj.pathname}/${favicon}`;
			}
		}

		/*Fetch values into an object */
		const preview = {
			url,
			title: $("title").first().text(),
			favicon: favicon || `${urlObj.protocol}//${urlObj.host}/favicon.ico`,
			description: getMetaTag("Description"),
			image: getMetaTag("Image"),
			author: getMetaTag("Author"),
		};

		Object.keys(preview).forEach((key) => {
			if ((preview as Record<string, unknown>)[key] === undefined) {
				delete (preview as Record<string, unknown>)[key];
			}
		});

		return preview;
	} catch (error) {
		return {};
	}
};

export default fetchLinkPreview;
