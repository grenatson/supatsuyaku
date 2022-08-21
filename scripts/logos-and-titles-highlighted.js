let logos = document.querySelectorAll('.logo');
let titles = document.querySelectorAll('.title');

let addHighlightHandler = function (logo, title) {
    logo.addEventListener('mouseover', function () {
        title.classList.add('highlighted');
    });
    title.addEventListener('mouseover', function () {
        logo.classList.add('highlighted');
    });

    logo.addEventListener('mouseleave', function () {
        title.classList.remove('highlighted');
    });
    title.addEventListener('mouseleave', function () {
        logo.classList.remove('highlighted');
    });
};

for (let i = 0; i < logos.length; i++) {
    addHighlightHandler(logos[i], titles[i]);
}