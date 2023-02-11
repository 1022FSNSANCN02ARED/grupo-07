// Dependencias requeridas
const express = require("express");
const path = require("path");
const mainRouter = require("./routers/main-router");
const methodOverride = require("method-override");

//Ejecución de express
const app = express();

// Levantar el servidor
app.listen(3001, () => {
  console.log("Funcionando");
});

// Ruta a archivos public
const publicpath = path.join(__dirname, "../public");
app.use(express.static(publicpath));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

//EJS  --------------------------------------------------
//Configuracón EJS
//motor EJS
app.set("view engine", "ejs");

//Ubicación
app.set("views", path.join(__dirname, "/views"));

//Ejecutar archivo mainRouter
app.use(mainRouter);
app.use((req, res, next) => {
  res.status("404").render("error-404");
});
