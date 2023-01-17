const express = require("express");
const path = require("path");
const app = express();
app.listen(3001, () => {
  console.log("Funcionando");
});

const publicpath = path.join(__dirname, "./public");
app.use(express.static(publicpath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/index.html"));
});

app.get("/detalle", (req, res) => {
  res.sendFile(path.join(__dirname, "views/products/detalle.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/register.html"));
});
app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/carrito.html"));
});
app.get("/carga", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/carga.html"));
});
