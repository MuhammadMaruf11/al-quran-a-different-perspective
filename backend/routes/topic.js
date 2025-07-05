const { topicController, subTopicController, mainTopicController } = require("../controllers/topicController");
const express = require("express");
const router = express.Router();

router.get("/:topicId", topicController);
router.get("/:topicId/:subTopicId", subTopicController);
router.get("/", mainTopicController);

module.exports = router;