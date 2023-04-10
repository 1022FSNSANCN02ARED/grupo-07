//Carga el js al final
window.onload = function() {
    const botonMenu= document.querySelector(".header__menu");
const openMenu = document.querySelector(".openMenu");
const body = document.querySelector('body');
//Abre el menú
botonMenu.addEventListener("click", ()=>{
    openMenu.classList.toggle("active")
    openMenu.classList.toggle("box-shadow")
    body.classList.add('no-scroll');
})
}

