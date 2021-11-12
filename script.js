let nav = document.querySelector('nav');

window.addEventListener('scroll', ()=>{
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark','shadow');
    } else {
        nav.classList.remove('bg-dark','shadow');
    }
});