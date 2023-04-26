const db = require("../database/models");

const controller = {
  home: (req, res) => {
    db.Producto.findAll({
      order: [["id", "DESC"]],
      limit: 5,
    }).then((producto) => {
      res.render("users/home", { producto });
    });
  },
};


module.exports = controller;