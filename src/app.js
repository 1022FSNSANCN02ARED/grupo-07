// Dependencias requeridas
const express = require("express");
const path = require("path");
const mainRouter = require("./routers/main-router");
const multer = require('multer')

//Ejecución de express
const app = express();

// Levantar el servidor
app.listen(3001, () => {
  console.log("Funcionando");
});

// Ruta a archivos public
const publicpath = path.join(__dirname, "../public");
app.use(express.static(publicpath));

//EJS  --------------------------------------------------
//Configuracón EJS
//motor EJS
app.set("view engine", "ejs");

//Ubicación
app.set("views", path.join(__dirname, "/views"));

//Ejecutar archivo mainRouter
app.use(mainRouter);
