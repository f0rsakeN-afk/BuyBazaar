const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactController");

router.post("/message", contactController.sendMessage);

module.exports = router;
