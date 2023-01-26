const path = require("path");

module.exports = {
  home: (req, res) => {
    res.render("users/index");
  },
  carga: (req, res) => {
    res.render("users/carga");
  },
  detalle: (req, res) => {
    res.render("products/detalle");
  },
  carrito: (req, res) => {
    res.render("users/carrito");
  },
  catalogue: (req, res) => {
    res.render("users/catalogo");
  },
  login: (req, res) => {
    res.render("users/login");
  },
  product: (req, res) => {
    res.render("users/product");
  },
  register: (req, res) => {
    res.render("users/register");
  },
  turns: (req, res) => {
    res.render("users/turns");
  },
};
