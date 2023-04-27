const bcryptjs = require("bcryptjs");
const session = require("express-session");
const { validationResult, body } = require("express-validator");
const db = require("../database/models");

const controller = {
  mostrarRegister: (req, res) => {
    res.render("users/register");
  },

  processRegister: async (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    //const userInDB = db.Usuario.findByField("email", req.body.email);
    let userInDB = await db.Usuario.findAll({
      where: { email: req.body.email },
    });
    if (userInDB.length > 0) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }

    db.Usuario.create({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      email: req.body.email,
      //contacto: Number(req.body.contacto),
      rolId: 2,
      avatar: req.file
        ? "/img/users/" + req.file.filename
        : "/img/users/usuario-generico.jpg",
      password: bcryptjs.hashSync(req.body.password, 10),
    }).then(() => {
      res.redirect("/users/login");
    });
  },

  mostrarLogin: (req, res) => {
    res.render("users/login");
  },

  loginProcess: (req, res) => {
    const userToLogin = db.Usuario.findOne({
      where: { email: req.body.email },
    }).then((usuario) => {
      if (usuario) {
        let isOkThePassword = bcryptjs.compareSync(
          req.body.password,
          usuario.password
        );
        if (isOkThePassword) {
          delete usuario.password;
          req.session.userLogged = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            correo: usuario.email,
            avatar: usuario.avatar,
          };
          if (req.body.recordame) {
            res.cookie("userEmail", req.body.email, {
              maxAge: 1000 * 60 * 60,
            });
          }
          return res.redirect("/", { usuario: req.session.userLogged });
        } else {
          return res.render("users/login", {
            errors: {
              password: {
                msg: "La contraseña es incorrecta",
              },
            },
          });
        }
      } else {
        return res.render("users/login", {
          errors: {
            email: {
              msg: "No se encontró un usuario con ese mail",
            },
          },
        });
      }
    });
  },

  profile: (req, res) => {
    //console.log(req.session);
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

  //Api Allusers
  allusersAPI: (req, res) => {
    db.Usuario.findAll().then((usuario) => {
      res.json({
        status: 200,
        data: usuario,
      });
    });
  },

  //Api Usuario por id
  Usuario: (req, res) => {
    let usuario = db.Usuario.findByPk(req.params.id).then((Usuario) => Usuario);
    Promise.all([usuario]).then(([usuario]) => {
      res.json({
        status: 200,
        data: usuario,
      });
    });
  },
};

module.exports = controller;
