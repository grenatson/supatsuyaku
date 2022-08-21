let smallFigures = document.querySelectorAll('.gallery figure');
let largePicture = document.querySelector('.large-picture');
let image = largePicture.querySelector('figure img');
let imageDescriptionRu = largePicture.querySelector('figure figcaption p:first-child');
let imageDescriptionJp = largePicture.querySelector('figure figcaption p:last-child');
let currentPhotoNumber = 0;
let pictureCount = largePicture.querySelector('.count-picture p');

/**/
let prevButton = largePicture.querySelector('.previous');
let nextButton = largePicture.querySelector('.following');

let lockCheck = function () {
    if (currentPhotoNumber === 1) {
        prevButton.classList.add('lock');
    } else {
        prevButton.classList.remove('lock');
    }
    if (currentPhotoNumber === smallFigures.length) {
        nextButton.classList.add('lock');
    } else {
        nextButton.classList.remove('lock');
    }
};
/**/

let addFigureClickHandler = function (figure) {
    let photoSrc = figure.querySelector('img').src;
    let photoDescriptionRu = figure.querySelector('figcaption p:first-child').textContent;
    let photoDescriptionJp = figure.querySelector('figcaption p:last-child').textContent;
    figure.addEventListener('click', function () {
        image.src = photoSrc;
        imageDescriptionRu.textContent = photoDescriptionRu;
        imageDescriptionJp.textContent = photoDescriptionJp;
        currentPhotoNumber = Number(figure.id);
        pictureCount.textContent = figure.id + '/19';
        lockCheck();
        
        largePicture.classList.add('visible');
    });
};

for (let figure of smallFigures) {
    addFigureClickHandler(figure);
}

let closeButton = largePicture.querySelector('.close-picture');
closeButton.addEventListener('click', function () {
    largePicture.classList.remove('visible');
});

prevButton.addEventListener('click', function () {
    if (currentPhotoNumber > 1) {
        currentPhotoNumber--;
        let newFigure = document.getElementById(String(currentPhotoNumber));
        image.src = newFigure.querySelector('img').src;        
        imageDescriptionRu.textContent = newFigure.querySelector('figcaption p:first-child').textContent;
        imageDescriptionJp.textContent = newFigure.querySelector('figcaption p:last-child').textContent;
        pictureCount.textContent = newFigure.id + '/19';
    }
    lockCheck();
});
nextButton.addEventListener('click', function () {
    if (currentPhotoNumber < smallFigures.length) {
        currentPhotoNumber++;
        let newFigure = document.getElementById(String(currentPhotoNumber));
        image.src = newFigure.querySelector('img').src;
        imageDescriptionRu.textContent = newFigure.querySelector('figcaption p:first-child').textContent;
        imageDescriptionJp.textContent = newFigure.querySelector('figcaption p:last-child').textContent;
        pictureCount.textContent = newFigure.id + '/19';
    }
    lockCheck();
});