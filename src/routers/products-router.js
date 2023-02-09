const express = require("express");
const path = require ("path");
const res = require("express/lib/response");
const router = express.Router();
const multer = require('multer');

// Disco de almacenamiento de Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, '/img/products');
    }, 
    filename: function (req, file, cb) { 
       cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname)) 
    } 
  })


// Middleware Multer
const upload = multer({ storage });

const productsController = require("../controllers/products-controller");


//Listado de producto
router.get("/", productsController.home);

//Formulario de creacion de productos
router.get("/create", productsController.create);

//Accion de creacion
router.post("/", upload.single ("imagen"), productsController.store);

//Detalle del producto
router.get("/detail/:id", productsController.detail);

//Formulario de edicion de productos
router.get("/:id/edit", productsController.edit);

//Accion de edicion
router.put("/:id", productsController.update);

//Accion de borrado
router.delete("/:id", productsController.destroy);

module.exports = router;

