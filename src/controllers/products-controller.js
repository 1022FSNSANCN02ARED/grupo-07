const productos = require("../data/productos");

const controller = {
  detail: (req, res) => {
    const id = req.params.id;
    const producto = productos.find((producto) => producto.id == id);
    res.render("products/detalle", { producto });
  },
};
module.exports = controller;
