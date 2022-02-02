const express = require("express");
const data = require("./data");
const app = express();
const PORT = 8000;

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
});
