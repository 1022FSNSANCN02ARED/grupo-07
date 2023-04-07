const { decodeBase64 } = require("bcryptjs");
const sequelize = require("sequelize");
const db = require("../database/models");
const Producto = db.Producto;

const controller = {
  home: (req, res) => {},
  allProducts: (req, res) => {
    db.Producto.findAll().then((Producto) => {
      res.render("products/allproducts", { Producto });
    });
  },
  adm: (req, res) => {
    res.render("products/adm", { user: req.session.userToLogin });
  },
  create: (req, res) => {
    db.Producto.findAll().then(() => {
      res.render("products/create");
    });
  },

  store: (req, res) => {
    db.Producto.create({
      ...req.body,
      marca: req.body.marca,
      imagen: req.file,
      descripción: req.body.descripción
        ? "/img/products/" + req.file.filename
        : "/img/products/defaul-img.png",
    }).then(() => {
      res.redirect("/products/allproducts");
    });
  },

  detail: (req, res) => {
    db.Producto.findByPk(req.params.id);
    const product = products
      .findAll()
      .then((producto) => producto.id == req.params.id);
    res.render("products/detail", { product });
  },
  edit: (req, res) => {
    db.Producto.findByPk(req.params.id).then((Productos) => {
      res.render("products/edit", {
        Productos: {
          ...Productos.get(),
        },
      });
    });
  },

  update: (req, res) => {
    const imagenestablecida = Producto.findById(req.params.id);
    db.Producto.update({
      id: Number(req.params.id),
      nombre: req.body.nombre,
      marca: req.body.marca,
      stock: req.body.stock,
      precio: Number(req.body.precio),
      descripción: req.body.descripción,
      imagen: req.files ? req.files.originalname : imagenestablecida.imagen,
    }).then(() => {
      res.redirect("/products/allproducts");
    });
  },

  destroy: (req, res) => {
    db.Producto.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/products/allproducts");
    });
  },
};

module.exports = controller;
