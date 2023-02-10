const products = require("../data/products");

const controller = {
  home: (req, res) => {
    res.render("users/home", { products });
  },
};
module.exports = controller;
