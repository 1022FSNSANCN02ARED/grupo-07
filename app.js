 // Dependencias requeridas 
const express = require("express");
const path = require("path");

//const { resolve } = require("path");
const app = express();

// Puerto 
app.listen(3001, () => {
  console.log("Funcionando");
});

// Ruta a archivos public 
const publicpath = path.join(__dirname, "./public");
app.use(express.static(publicpath));

// Index/home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/index.ejs"));
});

// Detalle
app.get("/detalle", (req, res) => {
  res.sendFile(path.join(__dirname, "views/products/detalle.html"));
});

// Login
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/login.html"));
});

// Register
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/register.html"));
});

// Carrito
app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/carrito.html"));
});

// Carga
app.get("/carga", (req, res) => {
  res.sendFile(path.join(__dirname, "views/users/carga.html"));
});

//EJS  --------------------------------------------------
//Configuracón EJS
//motor EJS
app.set('view engine', 'ejs');

//Ubicación
app.set('viwes',__dirname + ' /partials');

//recursos estáticos
app.use(express.static('public'));

app.get('/',(req,res)=>{
  //console.log(__dirname)
  res.render("index",)
})

//res.render
app.get('/',(req,res)=>{
    res.render('index')
});

