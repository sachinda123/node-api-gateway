const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("gateway");
});

app.listen(port, () => {
  console.log(`main gateway on Port ${port}`);
});
