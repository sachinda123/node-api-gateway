const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("service 1");
});
app.listen(port, () => {
  console.log("service 1  start port ", port);
});
