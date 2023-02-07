const express = require("express");
const router = express.Router();
const multer = require ('multer')

const productsController = require("../controllers/products-controller");

// Detalle del producto

router.get("/detail/:id", productsController.detail);

// Disco de almacenamiento de Multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/avatars'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

// Middleware Multer
const uploadFile = multer({ storage });

module.exports = router;

