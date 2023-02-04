// Dependencias requeridas
const express = require("express");
const path = require("path");
const mainRouter = require("./routers/main-router");
// const productsRouter = require("./router/products-router");
// const usersRouter = require("./router/users-router");

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
// app.use(productsRouter);
// app.use(usersRouter);
