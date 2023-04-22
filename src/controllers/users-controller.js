const bcryptjs = require("bcryptjs");

const { validationResult } = require("express-validator");
const db = require("../database/models");

const controller = {
  mostrarRegister: (req, res) => {
    res.render("users/register");
  },

  processRegister: async (req, res) => {
    console.log("error1");
    const resultValidation = validationResult(req);
    if (resultValidation.length > 0) {
      console.log("error2");
      return res.render("users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    console.log("ENTRÓ");
    //const userInDB = db.Usuario.findByField("email", req.body.email);
    let userInDB= await db.Usuario.findAll({where:{email:req.body.email}})
    console.log(userInDB);
    if (userInDB.length>0) {
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
        : "/img/users/default-img.png",
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
        delete usuario.password.dataValues;
        req.session.userToLogin = usuario.dataValues;

        if (req.body.recordame) {
          res.cookie("userEmail", req.body.email, {
            maxAge: 1000 * 60 * 60,
          });
        }
        return res.redirect("/users/profile");
      } else {
        return res.render("users/login", {
          errors: {
            email: {
              msg: "Las credenciales son invalidas",
            },
          },
        });
      }
    });
  },

  profile: (req, res) => {
    return res.render("users/profile", {
      user: req.session.userToLogin,
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
