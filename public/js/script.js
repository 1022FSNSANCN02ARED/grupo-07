window.onload = function() {
    const menu = document.querySelector(".header__menu");
const openMenu = document.querySelector(".openMenu");

// menu.addEventListener("click",()=>{
//     openMenu.classList.toggle("menuActive");
// })

menu.addEventListener("click", ()=>{
    openMenu.classList.toggle("active")
})
}

