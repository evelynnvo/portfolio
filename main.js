const card = document.querySelector('.card-inner');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
    card.getAttribute('.card-face-front').getAttribute('.card-content').getAttribute('.card-header-front').toggle('is-flipped');
});
