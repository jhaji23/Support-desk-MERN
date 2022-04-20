console.log("welcome to backend");
const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("hahahaha");
});

app.listen(5000, () => {
  console.log(`server started on port ${PORT}`);
});
