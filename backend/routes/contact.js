const express = require("express");
const router = express.Router();
const { contactController } = require("../controllers/contactController");

router.post("/post", contactController);

module.exports = router;
