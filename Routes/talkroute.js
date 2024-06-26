const express = require("express");
const { getText } = require("../controllers/Talk");
const router = express.Router();
router.route("/getText").post(getText);
module.exports = router;