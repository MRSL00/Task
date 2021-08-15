const express = require("express");
const router = express.Router();
const {
  CreateArticleController,
  GetAllArticlesController,
  GetArticleController,
  GetArticleCovereController,
} = require("../controller/article.controller");
const upload = require("../tools/coverFilter");

router.post("/", upload.single("cover"), CreateArticleController);
router.get("/requirements", GetAllArticlesController);
router.get("/requirement", GetArticleController);
router.get("/cover", GetArticleCovereController);

module.exports = router;
