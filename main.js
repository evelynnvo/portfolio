// const card = document.querySelector('.card-inner');
// card.addEventListener('click', function () {
//     card.classList.toggle('is-flipped');
//     const cardHeaderFront = document.querySelector('.card-header-front');
//     cardHeaderFront.classList.toggle('is-flipped');
// });

const return_button = document.querySelector('.return-button');
return_button.addEventListener('click', function() {
    $('.card-2').css('visibility','hidden');
});

const deal_button = document.querySelector('.deal-button');
deal_button.addEventListener('click', function() {
    $('.card-2').css('visibility','visible');
});

// deal_button.addEventListener('click', function() {
//     document.getElementsByClassName('.card-2')[0].style.visibility = "visible";
//     deal_button.style.background = "blue";

// });

// $('.return-button').click(function() {
//     $('.card-2').css('visibility', 'visible');
// });