const controller = {
  login: (req, res) => {
    res.render("users/login");
  },
  register: (req, res) => {
    res.render("users/register");
  },

  carga: (req, res) => {
    res.render("users/carga");
  },
  carrito: (req, res) => {
    res.render("users/carrito");
  },
};
module.exports = controller;
