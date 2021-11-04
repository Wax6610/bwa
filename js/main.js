function toggleMenu() {
    const menu = document.querySelector('.nav__list') 
    menu.classList.toggle('nav__list--active');
}

const menuBtn = document.querySelector(".nav__button");
menuBtn.addEventListener('click', () => toggleMenu());

