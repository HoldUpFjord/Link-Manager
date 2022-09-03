const splitTags = (str) => {
	let result = str.split(",");
	result = result.map((tag) => tag.trim()).filter((tag) => tag.length >= 1);
	return result;
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
  splitTags, parseTitle
}