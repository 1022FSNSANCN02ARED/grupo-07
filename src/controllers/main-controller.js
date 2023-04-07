const db = require("../database/models");

const controller = {
  home: (req, res) => {
    db.Producto.findAll().then((Producto) => {
      res.render("users/home", { Producto });
    });
  },
};
module.exports = controller;
