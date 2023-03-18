const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const { validationResult } = require("express-validator");

const controller = {
  mostrarRegister: (req, res) => {
    res.render("users/register");
  },

  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }

    const userInDB = User.findByField("email", req.body.email);

    if (userInDB) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "este email ya esta registrado",
          },
        },
        oldData: req.body,
      });
    }

    const userToCreate = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      contacto: Number(req.body.contacto),
      categoria: req.body.categoria,
      avatar: req.file
        ? "/img/users/" + req.file.filename
        : "/img/products/default-img.png",
      categoria: "cliente",
      password: req.body.password,
      password: bcryptjs.hashSync(req.body.password, 10),
    };

    const userCreated = User.create(userToCreate);
    return res.redirect("/users/login");
  },

  mostrarLogin: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) => {
    const userToLogin = User.findByField("email", req.body.email);

    if (userToLogin) {
      let isOkThePassword = bcryptjs.compareSync(
        req.body.password,
        userToLogin.password
      );
      if (isOkThePassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.recordame) {
          res.cookie("userEmail", req.body.email, { maxAge: 1000 * 60 * 60 });
        }
        return res.redirect("/users/profile");
      }
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Las credenciales son invalidas",
          },
        },
      });
    }
    return res.render("users/login", {
      errors: {
        email: {
          msg: "No se encuetra este email en la base de datos",
        },
      },
    });
  },

  profile: (req, res) => {
    res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  carga: (req, res) => {
    res.render("users/carga");
  },

  carrito: (req, res) => {
    res.render("users/carrito");
  },
};

module.exports = controller;
