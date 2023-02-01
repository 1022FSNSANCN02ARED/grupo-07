const productos = require("../data/productos");

module.exports = {
  home: (req, res) => {
    res.render("users/home", { productos });
  },
  detail: (req, res) => {
    const id = req.params.id;
    const producto = productos.find((producto) => producto.id == id);
    res.render("products/detalle", { producto });
  },
  carrito: (req, res) => {
    res.render("users/carrito");
  },
  carga: (req, res) => {
    res.render("users/carga");
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
