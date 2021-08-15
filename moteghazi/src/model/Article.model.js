const mongoose = require("mongoose");

const essentialSchema = {
  type: String,
  trim: true,
  lowercase: true,
};

const ArticleSchema = new mongoose.Schema(
  {
    title: {
      ...essentialSchema,
      unique: true,
      validate(value) {
        if (!value) {
          throw new Error("Please set a title for your article");
        } else if (value.length < 3) {
          throw new Error("title should be greater than 3 characters!!!");
        }
      },
    },
    content: {
      ...essentialSchema,
      validate(value) {
        if (!value) {
          throw new Error("Please set a content for your article");
        } else if (value.length < 3) {
          throw new Error("content should be greater than 3 characters!!!");
        }
      },
    },
    cover: {
      type: Buffer,
      validate(value) {
        if (!value) {
          throw new Error("Please set a cover for your article");
        }
      },
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
