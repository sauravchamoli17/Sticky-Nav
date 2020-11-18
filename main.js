const nav = document.querySelector('#main');
const header = document.querySelector('header');
const headerBottom = (header.offsetTop + header.offsetHeight);

function fixNav() {
    console.log(window.scrollY);
    if (window.scrollY >= headerBottom) {
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixNav);