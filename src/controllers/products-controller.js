const sequelize = require("sequelize");
const db = require("../database/models");


const controller = {
  home: (req, res) => {},

  allProducts: (req, res) => {
    db.Producto.findAll({ include: [{ model: db.Marca }] }).then(
      (Productos) => {
        res.render("products/allproducts", { Productos });
      }
    );
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
      descripción: req.body.descripción,
      imagen: req.file
        ? "/img/products/" + req.file.filename
        : "/img/products/defaul-img.png",
    }).then(() => {
      res.redirect("/products/allproducts");
    });
  },

  detail: (req, res) => {
    db.Producto.findByPk(req.params.id).then(
      (producto) => producto.id == req.params.id
    );
    res.render("products/detail", { Producto });
  },
  edit: (req, res) => {
    db.Producto.findByPk(req.params.id, {
      include: [{ model: db.Marca }, { model: db.Gama,attributes:["gama"], }],
    }).then((Productos) => {
      console.log(Productos);
      res.render("products/edit", { Productos });
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

  //Api Allproductos
  allProductsAPI: (req, res) => {
    db.Producto.findAll().then((Productos) => {
      res.json({
        status: 200,
        data: Productos,
      });
    });
  },

  //Api producto por id
  producto: (req, res) => {
    let producto = db.Producto.findByPk(req.params.id).then(
      (producto) => producto
    );
    Promise.all([producto]).then(([producto]) => {
      res.json({
        status: 200,
        data: producto,
      });
    });
  },

  //Buscador por nombre
  filterProductsByName: (req, res) => {
    if (req.query.nombreProducto) {
      db.Producto.findAll({
        include: [{ model: db.Marca }, { model: db.Gama }],
        where: {
          nombre: {
            [sequelize.Op.like]: `%${req.query.nombreProducto}%`,
          },
        },
      }).then((Productos) => {
        res.render("products/allproducts", { Productos });
      });
    } else {
      controller.allProducts(req, res);
    }
  },
};

module.exports = controller;
