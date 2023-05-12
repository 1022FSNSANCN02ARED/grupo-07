const express = require("express");
const path = require("path");
//const res = require("express/lib/response");
const router = express.Router();
const productsController = require("../controllers/products-controller");
const middlewareAdmin = require("../middlewares/middlewareAdmin");
const validateCreate = require("../middlewares/validateCreate");
const createError = require("../middlewares/errorValideteMiddlewareCreate");
const validateEdit = require("../middlewares/validateEdit");
const errorValidateEdit = require("../middlewares/errorValidateEdit");

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

//Listado de producto
router.get("/", productsController.home);

router.get("/allproducts", productsController.allProducts);
// administradores
router.get("/admin", middlewareAdmin, productsController.adm);

//Formulario de creación de productos
router.get("/create", productsController.create);

//Accion de creación
router.post(
  "/create",
  upload.single("imagen"),
  [validateCreate, createError],
  productsController.store
);

//Detalle del producto
router.get("/detail/:id", productsController.detail);

//Formulario de edición de productos
router.get("/edit/:id", productsController.edit);

//Accion de edición
router.put(
  "/:id",
  upload.single("imagen"),
  [validateEdit, errorValidateEdit],
  productsController.update
);

//Accion de borrado
router.delete("/:id", productsController.destroy);

//Buscador por nombre
router.get("/filter", productsController.filterProductsByName);

/*================================================API================================================*/

// Allproducts api
router.get("/api/all", productsController.allProductsAPI);

// Cantidad productos por marca
router.get("/api/marca", productsController.MarcaProductsApi);

// Totalproducts api
router.get("/api/total", productsController.totalProductsAPI);

// Last products api
router.get("/api/last", productsController.lastProductsAPI);

//Detail products api
router.get("/api/detail/:id", productsController.detailProductsApi);

// Product por id api
router.get("/api/:id", productsController.producto);

//Destroy products api
router.delete("/api/:id", productsController.deleteProductsAPI);

//404
router.get("/*", (req, res) => {
  res.redirect("/error-404");
});

module.exports = router;
