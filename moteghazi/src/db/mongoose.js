const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/moteghazi-task",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) return console.log("[!] Database connection failed.");
    console.log("[+] Database connected succesfully.");
  }
);
