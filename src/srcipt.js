const menuButton = document.querySelector('.menu-btn'),
    menu = document.querySelector('.navbar'),
    closeMenuButton = document.querySelector('.close-btn');
const toggleMenu = () => {
    menu.classList.toggle('navbar-open');
}

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);
