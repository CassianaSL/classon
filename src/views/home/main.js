document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.carousel');
    const instances = M.Carousel.init(elems);
});

var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});

