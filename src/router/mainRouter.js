const { Router } = require("express");
const mainController = require("../controllers/mainController");
const router = Router();
//index/
router.get("/", mainController.home);
//Detalle
router.get("/detail/:id", mainController.detail);
//login
router.get("/login", mainController.login);
//Register
router.get("/register", mainController.register);
//carrito
router.get("/carrito", mainController.carrito);
//carga
router.get("/carga", mainController.carga);

module.exports = router;
