// eslint-disable-next-line no-undef
const express = require("express");
const app = express();
const port = 3000;

















app.get("/", (req, res) => {
  res.end("Home how are yo tuei ekieeepage");










  
  res.send("<h1>i love yu</h1>")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
