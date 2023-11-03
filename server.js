// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
const port = 3000;










    const data = 489489














app.get("/", (req, res) => {
  res.end("Home page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
