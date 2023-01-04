const menu = document.querySelector(".contenedorMenu");
const span = document.querySelectorAll("span");
const DesplegarMenu = document.querySelector(".menuDesplegado")

menu.addEventListener("click", ()=>{
    menu.classList.toggle("active")
    DesplegarMenu.classList.toggle("desplegado");
})

DesplegarMenu.addEventListener("click", ()=>{
    
})


