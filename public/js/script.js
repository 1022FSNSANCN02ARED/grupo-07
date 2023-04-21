//Carga el js al final
window.addEventListener("load",function() {
const botonMenu= document.querySelector(".header__menu");
const openMenu = document.querySelector(".openMenu");
const body = document.querySelector('body');
let paginaBloqueada = false;

//Abre el menú
botonMenu.addEventListener("click", ()=>{
    openMenu.classList.toggle("active")
    openMenu.classList.toggle("box-shadow")
//Sube la vista
window.scrollTo({ top: 0, behavior: "smooth" });
//Bloquear scroll
 // Si la página no está bloqueada
 if (!paginaBloqueada) {
    // Agregar la clase "active" al botón
    botonMenu.classList.add('active');
    // Bloquear la página
    body.style.overflow = 'hidden';
    // Actualizar el estado de la variable
    paginaBloqueada = true;
  } else {
    // Si la página está bloqueada
    // Eliminar la clase "active" del botón
    botonMenu.classList.remove('active');
    // Desbloquear la página
    body.style.overflow = 'auto';
    // Actualizar el estado de la variable
    paginaBloqueada = false;
  }
})

//Validación de front
const campoNombre= document.querySelector("input .nombre")
const campoApellido = document.querySelector("input .apellido");
const campoEmail = document.querySelector("input .email");
const campoTelefono = document.querySelector("input .telefono");
const campoAvatar = document.querySelector("input .avatar");
const campoPassword = document.querySelector("input .password");
const imagen = document.getElementById('imagen');
const marca = document.getElementById('marca');
const stock = document.getElementById('Stock');
const precio = document.getElementById('precio');
const descripcion = document.getElementById('descripción');

//register
const erroresRegister=[];
const formularioRegister = document.querySelector("form .register");

formularioRegister.addEventListener("submit", function(e){
  e.preventDefault();

  if (campoNombre.value === "") {
    errores.push("El campo de nombre debe estar completo");
  } else if (campoNombre.value.length < 3) {
    errores.push("El campo de nombre debe tener al menos 3 caracteres");
  }
  
  if (campoApellido.value === "") {
    errores.push("El campo de apellido debe estar completo");
  } else if (campoApellido.value.length < 3) {
    errores.push("El campo de apellido debe tener al menos 3 caracteres");
  }
  
  if (campoEmail.value === "") {
    errores.push("El campo de correo electrónico debe estar completo");
  } else if (!campoEmail.value.includes("@")) {
    errores.push("El campo de correo electrónico debe contener un '@'");
  }
  
  if (campoTelefono.value === "") {
    errores.push("El campo de teléfono debe estar completo");
  } else if (!validarTelefono(campoTelefono.value)) {
    errores.push("El campo de teléfono debe contener un número de teléfono válido");
  }

  if (campoPassword.value === "") {
  errores.push("El campo de contraseña debe estar completo");
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}/.test(campoPassword.value)) {
  errores.push("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un símbolo y tener al menos 6 caracteres");
  }

  //Si hay errores
  if(erroresRegister.length>0){
    e.preventDefault();

    const ulErroresRegister= document.querySelector("div.erroresRegister ul")
    for (let i = 0; i < array.length; i++) {
      ulErroresRegister.innerHTML+= "<li>"+erroresRegister[i]+"<li>"
    }
  }
});

//Login
//Validación de front
//login
const erroresLogin=[];
const formularioLogin = document.querySelector("form .login");

formularioLogin.addEventListener("submit", function(e){
  e.preventDefault();
  const campoEmail = document.querySelector("input .email");
  const campoPassword = document.querySelector("input .password");

  if (campoEmail.value === "") {
    erroresLogin.push("El campo de correo electrónico debe estar completo");
  } else if (!campoEmail.value.includes("@")) {
    erroresLogin.push("El campo de correo electrónico debe contener un '@'");
  }
  
  if (campoPassword.value === "") {
  erroresLogin.push("El campo de contraseña debe estar completo");
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{5,}/.test(campoPassword.value)) {
  erroresLogin.push("La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número, un símbolo y tener al menos 6 caracteres");
  }

  //Si hay errores
  if(erroresLogin.length>0){
    e.preventDefault();

    const ulErroresLogin= document.querySelector(".login .erroresLogin ul")
    for (let i = 0; i < erroresLogin.length; i++) {
      ulErroresLogin.innerHTML+= "<li>"+erroresLogin[i]+"<li>"
    }
  }
});  

  //Carga
  const formularioCarga = document.querySelector("form.carga");
  formularioCarga.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const nombreProducto = document.getElementById("input .nombreProducto");
    const descripcion = document.getElementById("input .descripción");
    const imagenProducto = document.getElementById("input .imgProdcuto");
    const gama = document.getElementById("input .gama");
    const ram = document.getElementById("input .ram");
    const slots = document.getElementById("input .slots");
    const sockets = document.getElementById("input .sockets");
    const precio = document.getElementById("input .precio");
    
    const errores = [];
  
    if (nombreProducto.value.trim() === '') {
      errores.push("Debe ingresar un nombre de producto");
    }
  
    if (descripcion.value.trim() === '') {
      errores.push("Debe ingresar una descripción del producto");
    }
  
    if (imagenProducto.value.trim() === '') {
      errores.push("Debe subir una imagen del producto");
    }
  
    if (gama.value.trim() === '') {
      errores.push("Debe ingresar una gama del producto");
    }
  
    if (ram.value.trim() === '') {
      errores.push("Debe ingresar una memoria RAM para el producto");
    }
  
    if (slots.value.trim() === '') {
      errores.push("Debe ingresar la cantidad de slots del producto");
    } else if (isNaN(parseInt(slots.value)) || parseInt(slots.value) <= 0) {
      errores.push("Debe ingresar un valor numérico válido para la cantidad de slots");
    }
  
    if (sockets.value.trim() === '') {
      errores.push("Debe ingresar los sockets del producto");
    }
  
    if (precio.value.trim() === '') {
      errores.push("Debe ingresar un precio para el producto");
    } else if (isNaN(parseFloat(precio.value)) || parseFloat(precio.value) <= 0) {
      errores.push("Debe ingresar un valor numérico válido para el precio");
    }
  
    //Si hay errores
  if(erroresCarga.length>0){
    e.preventDefault();

    const ulErroresCarga= document.querySelector(".login .erroresCarga ul")
    for (let i = 0; i < erroresCarga.length; i++) {
      ulErroresCarga.innerHTML+= "<li>"+erroresCarga[i]+"<li>"
    }
  }
  });
  
  });

