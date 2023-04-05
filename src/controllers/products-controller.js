const { decodeBase64 } = require("bcryptjs");
const products = require("../data/products");
//const db= require ("../src/database/models");

const controller = {
  home: (req, res) => {},

  allProducts: (req, res) => {
    res.render("products/allproducts", { products });
  },
  adm: (req, res) => {
    res.render("products/adm");
  },
  create: (req, res) => {
    //db.Producto.findAll()
    //.then(function(Productos))
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
    //db.Producto.findByPk(req.params.id)
    const product = products
      .findAll()
      .find((producto) => producto.id == req.params.id);
    res.render("products/detail", { product });
  },
  edit: (req, res) => {
    //const producto = db.Producto.fincByPk(req.params.id)
    const product = products.findById(req.params.id);
    res.render("products/edit", { product });
  },

  update: (req, res) => {
    const imagenestablecida = products.findById(req.params.id);
//db.Productos.update({
    const product = {
      id: Number(req.params.id),
      nombre: req.body.nombre,
      marca: req.body.marca,
      stock: req.body.stock,
      precio: Number(req.body.precio),
      descripción: req.body.descripción,
      imagen: req.files ? req.files.originalname : imagenestablecida.imagen,
    };

    products.saveProductEdited(product);
    res.redirect("/products/adm");
  },
  destroy: (req, res) => {
    //db.Producto.destroy()
    //where:{
      //id:req.params.id
    //}
    products.deleteProduct(req.params.id);
    res.redirect("/");
  },
};

module.exports = controller;
