const Article = require("../model/Article.model");
const sharp = require("sharp");
const {
  GetAllArticlesController,
} = require("../controller/article.controller");

const createArticleService = async (Info, cover) => {
  const NewArticle = new Article(Info);
  try {
    const buffer = await sharp(cover.buffer)
      .resize({ width: 550, height: 550 })
      .png()
      .toBuffer();

    NewArticle.cover = buffer;

    await NewArticle.save();

    return NewArticle;
  } catch (error) {
    throw Error(error.message);
  }
};

const GetAllArticlesService = async (lim = 0, skip = 0) => {
  try {
    const limit = +lim;
    const pageNumber = +skip;

    const articles = await Article.find({})
      .skip((pageNumber - 1) * limit)
      .limit(limit);

    return articles;
  } catch (error) {
    throw Error(error.message);
  }
};

const GetArticleService = async (Id) => {
  try {
    const article = await Article.findOne({ _id: Id });
    return article;
  } catch (error) {
    throw Error(error.message);
  }
};

const GetArticleCoverService = async (Id) => {
  try {
    const article = await Article.findOne({ _id: Id });
    return article.cover;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = {
  createArticleService,
  GetAllArticlesService,
  GetArticleService,
  GetArticleCoverService
};
