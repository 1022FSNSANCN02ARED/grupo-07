const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/main-controller");

//index
router.get("/", mainController.home);

const productsRouter = require("../router/products-router");
router.use("/products", productsRouter);

const usersRouter = require("../router/users-router");
router.use("/users", usersRouter);

module.exports = router;
