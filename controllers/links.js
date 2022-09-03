const Link = require("../models/Link");
const axios = require("axios").default;

const splitTags = (str) => {
	let result = str.split(",");
	result = result.map((tag) => tag.trim()).filter((tag) => tag.length >= 1);
	return result;
};

module.exports = {
	getLinks: async (req, res) => {
		console.log(req.user);
		try {
			const linkItems = await Link.find({ userId: req.user.id }).sort({});
			const itemsLeft = await Link.countDocuments({
				userId: req.user.id,
				completed: false,
			});
			const last5 = linkItems.sort((a,b) => b.createdAt - a.createdAt)
														 .filter((x,i) => i <= 4)										 
			console.log({last5})
			res.render("links.ejs", {
				last5: last5,
				links: linkItems,
				left: itemsLeft,
				user: req.user,
			});
		} catch (err) {
			console.log(err);
		}
	},
	createLink: async (req, res) => {
		try {
			let linkTags = splitTags(req.body.linkTags);
			let linkURL = req.body.linkItem;
			const axiosConfig = {
				responseType: "json",
			};
			console.log(linkTags, linkURL);

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
			await axios
				.get(linkURL, axiosConfig)
				.then((body) => {
					return parseTitle(body);
				}) // extract <title> from head
				.then((response) => {
					Link.create({
						link: linkURL,
						title: response,
						completed: false,
						userId: req.user.id,
						tags: linkTags,
					});
					console.log("Link has been added!");
					res.redirect("/links");
				})
				.catch((e) => res.status(500).end(e.message)); // catch possible errors
		} catch (err) {
			console.log(err);
		}
	},
	markComplete: async (req, res) => {
		try {
			await Link.findOneAndUpdate(
				{ _id: req.body.linkIdFromJSFile },
				{
					completed: true,
				}
			);
			console.log("Marked Complete");
			res.json("Marked Complete");
		} catch (err) {
			console.log(err);
		}
	},
	markIncomplete: async (req, res) => {
		try {
			await Link.findOneAndUpdate(
				{ _id: req.body.linkIdFromJSFile },
				{
					completed: false,
				}
			);
			console.log("Marked Incomplete");
			res.json("Marked Incomplete");
		} catch (err) {
			console.log(err);
		}
	},
	deleteLink: async (req, res) => {
		console.log(req.body.linkIdFromJSFile);
		try {
			await Link.findOneAndDelete({ _id: req.body.linkIdFromJSFile });
			console.log("Deleted Link");
			res.json("Deleted It");
		} catch (err) {
			console.log(err);
		}
	},
};
