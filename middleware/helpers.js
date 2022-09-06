const cheerio = require("cheerio");

const splitTags = (str) => {
	let result = str.split(",");
	result = result.map((tag) => tag.trim()).filter((tag) => tag.length >= 1);
	return result;
};

const scrapeTitle = (body) => {
	let title;
	const $ = cheerio.load(body.data);

	console.log($("[title]").attr().title);
	console.log($("title").text());

	if (
		// If it's a short title - just grab it - length can be tweaked.
		$("html").find("title").text() &&
		$("html").find("title").text().length < 50
	) {
		title = $("html").find("title").text();
	} else if ($("[title]").attr().title) {
		// if it's title="foo" - grab it
		title = $("[title]").attr().title;
	} else {
		// just deal with the longer link but slice it down to sice - length can be tweaked.
		title = $("html").find("title").text().slice(0, 50);
	}
	console.log(title);
	return title;
};

const parseTitle = (body) => {
	// get the start index and the end index of the head
	const startTitle = body.data.indexOf("<title>") + 7;
	const endTitle = body.data.indexOf("</title>");

	//get the head as a string
	const parseTitle = body.data.slice(startTitle, endTitle);

	console.log(`${parseTitle} ${typeof parseTitle}`);

	// Helper function to extract the title from the header of the page returned from the URL

	if (!parseTitle || typeof parseTitle !== "string")
		throw new Error("Unable to parse the title tag");
	return parseTitle;
};

module.exports = {
	splitTags,
	parseTitle,
	scrapeTitle,
};
