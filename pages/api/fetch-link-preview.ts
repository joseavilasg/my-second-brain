import type { NextApiRequest, NextApiResponse } from "next";
import { load } from "cheerio";
import axios from "axios";
import fetchLinkPreview, { LinkPreviewData } from "../../utils/fetchLinkPreview";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<LinkPreviewData | string>
) {
	try {
		const preview = await fetchLinkPreview(req.query.url as string);

		//Send object as response
		res.status(200).json(preview);
	} catch (error) {
		res.status(500).json(
			"Something went wrong, please check your internet connection and also the url you provided"
		);
	}
}
