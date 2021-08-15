const express = require("express");
const app = express();
const logger = require("morgan");

app.use(express.json());
app.use(logger("dev"));

require("./db/mongoose");

const port = 7000;

app.use("/", require("./router/api"));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
