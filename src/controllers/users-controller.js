const bcryptjs = require ("bcryptjs");
const { validationResult } = require ("express-validator");
const User = require ("../models/User");



const controller = {
  mostrarRegister: (req, res) => {
    res.render("users/register");
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult (req);

    if (resultValidation.errors.length > 0) {
      return res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body
      });
    }
  
    const userInDB = User.findByField("email", req.body.email);
    
    if (userInDB) {
      return res.render("register", {
        errors: {
          email: {
            msg:"este email ya esta registrado"
          }
        },
        oldData: req.body
      });
    }

    const userToCreate = {
      ...req.body,
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename
    }

    const userCreater = UsersCreate (userToCreate);
      return req.redirect("/users/login");
  },

  mostrarLogin: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) =>{
    const userToLogin = User.findByField("email", req.body.email);
      
    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
        if (isOkThePassword) {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          return res.redirect("users/profile");
          }
          return res.render ("users/login", {
            errors:{
              email:{
                msg:"Las credenciales son invalidas"
              }
            } 
          });
    }
    return res.render ("users/login", {
      errors:{
        email:{
          msg:"No se encuetra este email en la base de datos"
        }
      } 
    });    
  },

  profile:(req, res) => {
    res.render("users/profile", {
      user: req.session.userLogged
    });
  },

  Logout: (req, res) =>{
    res.session.destroy();
    return res.redirect("/");
  },

  carga: (req, res) => {
    res.render("users/carga");
  },

  carrito: (req, res) => {
    res.render("users/carrito");
  },

}

module.exports = controller;
