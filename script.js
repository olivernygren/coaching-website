const header = document.getElementById('header');

window.onscroll = function() {

    let top = window.scrollY;

    if (top >= 50) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

const menuIcon = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.mobile-nav');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('change');
});