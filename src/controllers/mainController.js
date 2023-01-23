const path = require("path");

const controller = {
  home: (req, res) => {
    res.render("index");
  },
  car: (req, res) => {
    res.render("pages/carrito");
  },
  catalogue: (req, res) => {
    res.render("pages/catalogo");
  },
  login: (req, res) => {
    res.render("pages/login");
  },
  product: (req, res) => {
    res.render("pages/product");
  },
  register: (req, res) => {
    res.render("pages/register");
  },
  turns: (req, res) => {
    res.render("pages/turns");
  },
};
