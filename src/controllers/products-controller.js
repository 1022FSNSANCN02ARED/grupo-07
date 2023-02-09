const productos = require("../data/productos");

const controller = {
  home: (req, res)=>{

  },
  create: (req, res)=>{
    res.render("products/create");
  },
  store: (req, res)=>{

  },
  detail: (req, res) => {
    const id = req.params.id;
    const producto = productos.find((producto) => producto.id == id);
    res.render("products/detail", { producto });
  },
  edit: (req, res) => {
    const product = products.findById(req.params.id);
    res.render("products/edit", { product });
  },
  update: (req, res) => {
    const product = req.body;
    res.send(product);
  },
  destroy: (req, res) => {
    res.send(`deleting ${req.params.id}`);
  },
};

module.exports = controller;
