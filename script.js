const header = document.getElementById('header');

window.onscroll = function() {

    let top = window.scrollY;

    if (top >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

const desktopNav = document.querySelector('.desktop-nav');
const menuIcon = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const windowWidth = window.innerWidth;

menuIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('change');

    // if (desktopNav.classList.contains('display-none')) {

    //     desktopNav.classList.remove('display-none');
    //     mobileNav.classList.add('display-none');
    
    // } else {
    
    //     desktopNav.classList.add('display-none');
    //     mobileNav.classList.remove('display-none');
    
    // }

});




