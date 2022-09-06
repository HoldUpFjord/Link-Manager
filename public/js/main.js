const deleteBtn = document.querySelectorAll(".del");
const linkItem = document.querySelectorAll("span.not");
const linkComplete = document.querySelectorAll("span.completed");

Array.from(deleteBtn).forEach((el) => {
	el.addEventListener("click", deleteLink);
});

Array.from(linkItem).forEach((el) => {
	el.addEventListener("click", markComplete);
});

Array.from(linkComplete).forEach((el) => {
	el.addEventListener("click", markIncomplete);
});

async function deleteLink() {
	const linkId = this.parentNode.dataset.id;
	try {
		const response = await fetch("links/deleteLink", {
			method: "delete",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				"linkIdFromJSFile": linkId,
			}),
		});
		const data = await response.json();
		console.log(data);
		location.reload();
	} catch (err) {
		console.log(err);
	}
}

async function markComplete() {
	const linkId = this.parentNode.dataset.id;
	try {
		const response = await fetch("links/markComplete", {
			method: "put",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				"linkIdFromJSFile": linkId,
			}),
		});
		const data = await response.json();
		console.log(data);
		location.reload();
	} catch (err) {
		console.log(err);
	}
}

async function markIncomplete() {
	const linkId = this.parentNode.dataset.id;
	try {
		const response = await fetch("links/markIncomplete", {
			method: "put",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				"linkIdFromJSFile": linkId,
			}),
		});
		const data = await response.json();
		console.log(data);
		location.reload();
	} catch (err) {
		console.log(err);
	}
}
