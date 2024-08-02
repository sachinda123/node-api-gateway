const express = require("express");
const app = express();
const port = 3002;

app.listen(port, () => {
  console.log("service 2  on port ", port);
});
