const card = document.querySelector('.card-inner');
card.addEventListener('hover', function () {
    card.classList.toggle('is-flipped');
});