import type { NextApiRequest, NextApiResponse } from "next";
import { load } from "cheerio";
import axios from "axios";

export type LinkPreviewData = {
	url: string | string[] | undefined;
	title: string;
	favicon: string | undefined;
	description: string | undefined;
	image: string | undefined;
	author: string | undefined;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<LinkPreviewData | string>
) {
	try {
		//get url to generate preview, the url will be based as a query param.
		const { url } = req.query;
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

		/*Fetch values into an object */
		const preview = {
			url,
			title: $("title").first().text(),
			favicon:
				$('link[rel="shortcut icon"]').attr("href") ||
				$('link[rel="alternate icon"]').attr("href") ||
				`${urlObj.protocol}//${urlObj.host}/favicon.ico`,
			description: getMetaTag("Description"),
			image: getMetaTag("Image"),
			author: getMetaTag("Author"),
		};

		//Send object as response
		res.status(200).json(preview);
	} catch (error) {
		res.status(500).json(
			"Something went wrong, please check your internet connection and also the url you provided"
		);
	}
}
