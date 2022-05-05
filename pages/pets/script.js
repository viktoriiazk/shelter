const mobileMenu = document.getElementById('mobileMenu');
const burgerMenu = document.getElementById('burgerMenu');
const openMenu = () => {
    mobileMenu.classList.toggle('menu-active');
    burgerMenu.classList.toggle('burger-active');
}

burgerMenu.onclick = openMenu;


