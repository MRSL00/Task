const express = require("express");
const router = express.Router();

router.use("/api/1.0.0/requirement", require("./article.router"));

module.exports = router;
