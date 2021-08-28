const express = require("express");
const app = express();
const logger = require("morgan");

app.use(express.json());
app.use(logger("dev"));

require("./db/mongoose");

const port = 8080;

app.use("/", require("./router/api"));

app.listen(port, "APP_SERVER_PRIVATE_IP");
console.log("Server running at http://APP_SERVER_PRIVATE_IP_ADDRESS:8080/");
