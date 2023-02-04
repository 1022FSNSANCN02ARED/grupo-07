const { Router } = require("express");
const router = Router();
const mainController = require("../controllers/main-controller");

//index
router.get("/", mainController.home);

const productsRouter = require("../routers/products-router");
router.use(productsRouter);

const usersRouter = require("../routers/users-router");
router.use(usersRouter);

module.exports = router;
