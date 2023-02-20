const express = require("express");
const path = require("path");
// const res = require("express/lib/response");
const router = express.Router();

// Disco de almacenamiento de Multer

const multer = require("multer");
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/img/products"),
  filename: (req, file, cb) => {
    cb(null, "imagen" + Date.now() + path.extname(file.originalname));
  },
});
// Middleware Multer
const upload = multer({
  storage,
});

const productsController = require("../controllers/products-controller");

//Listado de producto
router.get("/", productsController.home);
router.get("/allproducts", productsController.allProducts);
// administradores
router.get("/adm", productsController.adm);

//Formulario de creacion de productos
router.get("/create", productsController.create);

//Accion de creacion
router.post("/", upload.single("imagen"), productsController.store);

//Detalle del producto
router.get("/detail/:id", productsController.detail);

//Formulario de edicion de productos
router.get("/:id/edit", productsController.edit);

//Accion de edicion
router.put("/:id", upload.single("imagen"), productsController.update);

//Accion de borrado
router.delete("/:id", productsController.destroy);

module.exports = router;
