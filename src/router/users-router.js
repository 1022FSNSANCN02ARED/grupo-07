const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users-controller");

//login
router.get("/login", usersController.login);
// Register
router.get("/register", usersController.register);
//carrito
router.get("/carrito", usersController.carrito);
//carga
router.get("/carga", usersController.carga);

module.exports = router;
