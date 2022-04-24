


const link = document.querySelector(".header__nav-box");
const menu = document.querySelector(".header__menu");

menu.addEventListener("click", () => {
    link.classList.toggle("header__nav-box--open")
})