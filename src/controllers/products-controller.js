const sequelize = require("sequelize");
const db = require("../database/models");
const productos = require("../database/models/productos");

const controller = {
  home: (req, res) => {},

  allProducts: (req, res) => {
    db.Producto.findAll({ include: [{ model: db.Marca }] }).then(
      (Productos) => {
        res.render("products/allproducts", { Productos });
      }
    );
  },

  create: (req, res) => {
    db.Producto.findAll().then(() => {
      res.render("products/create");
    });
  },

  store: (req, res) => {
    db.Producto.create({
      ...req.body,
      marcaId: req.body.marca,
      descripción: req.body.descripción,
      imagen: req.file
        ? "/img/products/" + req.file.filename
        : "/img/products/default-img.png",
    }).then(() => {
      res.redirect("/products/allproducts");
    });
  },

  detail: (req, res) => {
    db.Producto.findByPk(req.params.id, {
      include: [{ model: db.Marca }, { model: db.Gama, attributes: ["gama"] }],
    }).then((Productos) => {
      res.render("products/detail", { Productos });
    });
  },
  edit: (req, res) => {
    db.Producto.findByPk(req.params.id, {
      include: [{ model: db.Marca }, { model: db.Gama, attributes: ["gama"] }],
    }).then((Productos) => {
      res.render("products/edit", { Productos });
    });
  },

  update: async (req, res) => {
    const imagenEstablecida = await db.Producto.findByPk(req.params.id);
    db.Producto.update(
      {
        nombre: req.body.nombre,
        marcaId: parseInt(req.body.marca),
        gamaId: parseInt(req.body.gama),
        sockets: req.body.sockets,
        slots: parseInt(req.body.slots),
        ram: req.body.ram,
        precio: parseFloat(req.body.precio),
        descripcion: req.body.descripcion,
        imagen: req.file
          ? "/img/products/" + req.file.filename
          : imagenEstablecida.imagen,
      },
      { where: { id: req.params.id } }
    ).then(() => {
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

  //Api Allproducts
  allProductsAPI: (req, res) => {
    db.Producto.findAll({
      include: [{ model: db.Marca }, { model: db.Gama, attributes: ["gama"] }],
    }).then((Productos) => {
      let productsList = Productos.map((producto) => {
        console.log(producto);
        return {
          nombre: producto.nombre,
          precio: producto.precio,
          descripcion: producto.descripcion,
          marca: producto.Marca.marca,
          gama: producto.Gama.gama,
          imagen:producto.imagen,
          sockets:producto.sockets,
          slots:producto.slots,
          ram:producto.ram,
        };
      });
      res.json({
        status: 200,
        data: productsList,
      });
    });
  },
  //Api total products
  totalProductsAPI: (req, res) => {
    db.Producto.findAll().then((Productos) => {
      res.json({
        status: 200,
        total: Productos.length,
      });
    });
  },
  // Api Last Product
  lastProductsAPI: (req, res) => {
    db.Producto.findAll({
      order: [["id", "DESC"]],
      limit: 2,
    }).then((producto) => {
      res.json({
        status: 200,
        data: producto,
      });
    });
  },
  // Api detail Products
  detailProductsApi: (req, res) => {
    db.Producto.findByPk(req.params.id, {
      include: [{ model: db.Marca }, { model: db.Gama, attributes: ["gama"] }],
    }).then((Productos) => {
      res.json({
        status: 200,
        data: Productos,
      });
    });
  },
  // Api delete Product
  deleteProductsAPI: (req, res) => {
    db.Producto.destroy({
      where: {
        id: req.params.id,
      },
    }).then((response) => {
      return res.json({
        satatus: 200,
        data: response,
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
        include: [{ model: db.Marca }],
        where: {
          nombre: {
            [sequelize.Op.like]: `%${req.query.nombreProducto}%`,
          },
        },
      }).then((Productos) => {
        res.render("products/allproducts", { Productos });
      });
    } else {
      res.redirect("/products/allproducts");
    }
  },
};

module.exports = controller;
