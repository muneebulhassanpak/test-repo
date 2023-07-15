const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  return res.send(`<h1>Hello</h1>`);
});

app.listen(3000);
