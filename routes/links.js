const express = require("express");
const router = express.Router();
const linksController = require("../controllers/links");
const { ensureAuth } = require("../middleware/auth");

router.get("/", ensureAuth, linksController.getLinks);

router.post("/createLink", linksController.createLink);

router.put("/markComplete", linksController.markComplete);

router.put("/markIncomplete", linksController.markIncomplete);

router.delete("/deleteLink", linksController.deleteLink);

module.exports = router;
