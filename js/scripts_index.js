document.addEventListener("DOMContentLoaded", function() {
    var menuBtn = document.querySelector('.menu-btn');
    var menu = document.querySelector('.menu');
    var closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('open');
        menuBtn.classList.toggle('open');
    });

    closeBtn.addEventListener('click', function() {
        menu.classList.remove('open');
        menuBtn.classList.remove('open');
    });

    window.addEventListener('click', function(event) {
        if (event.target == menu) {
            menu.classList.remove('open');
            menuBtn.classList.remove('open');
        }
    });
});
