const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("service 2");
});

app.listen(port, () => {
  console.log("service 2  on port ", port);
});
