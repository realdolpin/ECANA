window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    header.classList.toggle('header-scroll', window.scrollY > 0);
});