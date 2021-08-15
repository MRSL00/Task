const {
  createArticleService,
  GetAllArticlesService,
  GetArticleService,
  GetArticleCoverService,
} = require("../service/article.service");

const CreateArticleController = async (req, res) => {
  try {
    const NewArticleInfo = await createArticleService(req.body, req.file);

    res.status(201).send(NewArticleInfo);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetAllArticlesController = async (req, res) => {
  try {
    const articles = await GetAllArticlesService(
      req.query.limit,
      req.query.skip
    );
    res.status(200).send(articles);
  } catch (error) {
    res.status(404).send("Articles Not Found!!! :(");
  }
};

const GetArticleController = async (req, res) => {
  try {
    const article = await GetArticleService(req.query.code);
    res.status(200).send(article);
  } catch (error) {
    res.status(404).send("Article Not Found!!! :(");
  }
};

const GetArticleCovereController = async (req, res) => {
  try {
    const article = await GetArticleCoverService(req.query.id);
    
    res.set("Content-Type", "image/png");
    res.status(200).send(article);
  } catch (error) {
    res.status(404).send("Article Not Found!!! :(");
  }
};

module.exports = {
  CreateArticleController,
  GetAllArticlesController,
  GetArticleController,
  GetArticleCovereController,
};
