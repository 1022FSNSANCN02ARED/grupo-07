const express = require("express");
const path = require("path");
//const res = require("express/lib/response");
const router = express.Router();
const validateCreate = require("../middlewares/validateCreate");

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
const middlewareAdmin = require("../middlewares/middlewareAdmin");

//Listado de producto
router.get("/", productsController.home);

router.get("/allproducts", productsController.allProducts);

//Formulario de creación de productos
router.get("/create", productsController.create);

//Accion de creación
router.post(
  "/create",
  upload.single("imagen"),
  validateCreate,
  productsController.store
);

//Detalle del producto
router.get("/detail/:id", productsController.detail);

//Formulario de edición de productos
router.get("/edit/:id", productsController.edit);

//Accion de edición
router.put("/:id", upload.single("imagen"), productsController.update);

//Accion de borrado
router.delete("/:id", productsController.destroy);

///////////////////////////////////////////////////////API//////////////////////////////////////////////////////////////////////

//get Allproducts api
router.get("/api/all", productsController.allProductsAPI);

// totalproducts api
router.get("/api/total", productsController.totalProductsAPI);

// last products api
router.get("/api/last", productsController.lastProductsAPI);

//Detail products api
router.get("/api/detail/:id", productsController.detailProductsApi);

//get product por id api
router.get("/api/:id", productsController.producto);

//destroy products api
router.delete("/api/:id", productsController.deleteProductsAPI);

//Buscador por nombre
router.get("/filter", productsController.filterProductsByName);

//404
router.get("/*", (req, res) => {
  res.redirect("/error-404");
});

module.exports = router;
