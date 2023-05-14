const { Router } = require("express");
const mainController = require("../controllers/main-controller");
const router = Router();

//home
router.get("/", mainController.home);

const productsRouter = require("../routers/products-router");
router.use("/products", productsRouter);

const usersRouter = require("../routers/users-router");
router.use("/users", usersRouter);

//404
router.get("/error-404",(req,res)=>{res.render("error-404")});
router.get("/*",(req,res)=>{res.redirect("/error-404")});

module.exports = router;
