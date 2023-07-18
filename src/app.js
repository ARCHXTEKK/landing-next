const mobileMenu = document.querySelector('#header-mobile-menu-btn');
const headerNav = document.querySelector('#header-nav');
const main = document.querySelector('.main');

function debounce(func, timeout=250) {
    let timer;
    return function(event) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(func, timeout, event);
    }
}

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu_active');
    headerNav.classList.toggle('nav_active');
    main.classList.toggle('main_moved');
})

window.addEventListener('resize', debounce(() => {
    if (window.matchMedia('(min-width: 640px)').matches) {
        main.classList.remove('main_moved');
        mobileMenu.classList.remove('mobile-menu_active');
        headerNav.classList.remove('nav_active');
    }
}));