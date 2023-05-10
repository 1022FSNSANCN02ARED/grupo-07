const { body } = require("express-validator");
module.exports=[
    body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),

    body("password")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .bail()
    .isLength({ min: 5 })
    .withMessage("La contraseña debe tener como mínimo 5 caracteres"),

    
]