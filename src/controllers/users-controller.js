
const controller = {
  mostrarLogin: (req, res) => {
    res.render("users/login");
  },
  mostrarRegister: (req, res) => {
    res.render("users/register");
  },

  register:(req,res)=>{
    res.render("user/profile");
  },

  login: (req, res) => {
    res.render("/");
  },

  carga: (req, res) => {
    res.render("users/carga");
  },
  carrito: (req, res) => {
    res.render("users/carrito");
  },
};
module.exports = controller;
