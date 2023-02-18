const products = require("../data/products");

const controller = {
  home: (req, res) => {},
  create: (req, res) => {
    res.render("products/create");
  },

  store: (req, res) => {
    const product = {
      id: Date.now(),
      nombre: req.body.nombre,
      marca: req.body.marca,
      stock: req.body.stock,
      precio: Number(req.body.precio),
      descripción: req.body.descripción,
      imagen: req.file
        ? "/img/products/" + req.file.filename
        : "/img/products/default-img.png",
    };

    products.saveProduct(product);
    res.redirect("/");
  },
  detail: (req, res) => {
    const product = products
      .findAll()
      .find((producto) => producto.id == req.params.id);
    res.render("products/detail", { product });
  },
  edit: (req, res) => {
    const product = products
      .findAll()
      .find((producto) => producto.id == req.params.id);
    res.render("products/edit", { product });
  },
  update: (req, res) => {
    const product = req.body;
    res.send(product);
  },
  destroy: (req, res) => {
    res.send(`deleting ${req.params.id}`);
  },
};

module.exports = controller;
