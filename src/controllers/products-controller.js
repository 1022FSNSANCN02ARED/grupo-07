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

  create: (req, res) => {
    db.Producto.findAll().then(() => {
      res.render("products/create");
    });
  },

  store: (req, res) => {
    db.Producto.create({
      ...req.body,
      marcaId: req.body.marca,
      gamaId: req.body.gama,
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
  adm: (req, res) => {
    db.Producto.findAll({ include: [{ model: db.Marca }] }).then(
      (Productos) => {
        res.render("products/admin", { Productos });
      }
    );
  },

  destroy: (req, res) => {
    db.Producto.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/products/admin");
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

  //Api Allproducts
  allProductsAPI: (req, res) => {
    db.Producto.findAll({
      include: [{ model: db.Marca }, { model: db.Gama, attributes: ["gama"] }],
    }).then((Productos) => {
      let productsList = Productos.map((producto) => {
        return {
          nombre: producto.nombre,
          precio: producto.precio,
          descripcion: producto.descripcion,
          marca: producto.Marca.marca,
          gama: producto.Gama.gama,
          imagen: producto.imagen,
          sockets: producto.sockets,
          slots: producto.slots,
          ram: producto.ram,
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
      include: [{ model: db.Marca }, { model: db.Gama, attributes: ["gama"] }],
      order: [["id", "DESC"]],
      limit: 1,
    }).then((producto) => {
      let productLast = {
        nombre: producto[0].nombre,
        precio: producto[0].precio,
        descripcion: producto[0].descripcion,
        marca: producto[0].Marca.marca,
        gama: producto[0].Gama.gama,
        imagen: producto[0].imagen,
        sockets: producto[0].sockets,
        slots: producto[0].slots,
        ram: producto[0].ram,
      };
      res.json({
        status: 200,
        data: productLast,
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

  // Api producto por marca
  marca: (req, res) => {
    db.Marca.findAll().then((marca) => {
      console.log(marca);
      res.json({
        status: 200,
        data: marca,
      });
    });
  },
};

module.exports = controller;
