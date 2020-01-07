window.addEventListener('DOMContentLoaded', () => {
    const hamburger  = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelectorAll('.menu-item');
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('menu-active')
        hamburger.classList.toggle('hamburger-active')
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu-active');
            hamburger.classList.toggle('hamburger-active');
        })
    })
})