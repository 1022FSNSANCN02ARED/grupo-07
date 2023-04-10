//Carga el js al final
window.onload = function() {
    const botonMenu= document.querySelector(".header__menu");
const openMenu = document.querySelector(".openMenu");
const body = document.querySelector('body');
const paginaBloqueada = false;

//Abre el menú
botonMenu.addEventListener("click", ()=>{
    openMenu.classList.toggle("active")
    openMenu.classList.toggle("box-shadow")
    botonMenu.classList.toggle('active');
//Bloquear scroll
 // Si la página no está bloqueada
 if (!paginaBloqueada) {
    // Agregar la clase "active" al botón
    botonMenu.classList.add('active');
    // Bloquear la página
    document.documentElement.style.overflow = 'hidden';
    // Actualizar el estado de la variable
    paginaBloqueada = true;
  } else {
    // Si la página está bloqueada
    // Eliminar la clase "active" del botón
    botonMenu.classList.remove('active');
    // Desbloquear la página
    document.documentElement.style.overflow = 'auto';
    // Actualizar el estado de la variable
    paginaBloqueada = false;
  }

})
}

