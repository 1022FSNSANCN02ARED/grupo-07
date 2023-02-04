const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

// Detalle del producto

router.get("/detail/:id", productsController.detail);

module.exports = router;
