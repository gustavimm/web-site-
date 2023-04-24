const NavMenu = document.querySelector('.nav-menu');
const menu = document.querySelector('.menu');


menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');

})
