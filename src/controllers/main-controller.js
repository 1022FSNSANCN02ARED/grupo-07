const productos = require("../data/productos");

const controller = {
  home: (req, res) => {
    res.render("users/home", { productos });
  },
};
module.exports = controller;
