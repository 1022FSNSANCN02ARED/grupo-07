const express = require("express");
const path = require("path");
const app = express();
app.listen(3001, () => {
  console.log("Funcionando");
});
const publicpath = path.join(__dirname, "./public");
app.use(express.static(publicpath));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/detalle", (req, res) => {
  res.sendFile(path.join(__dirname, "views/detalle.html"));
});
