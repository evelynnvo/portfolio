// const card = document.querySelector('.card-inner');
// card.addEventListener('click', function () {
//     card.classList.toggle('is-flipped');
//     const cardHeaderFront = document.querySelector('.card-header-front');
//     cardHeaderFront.classList.toggle('is-flipped');
// });

const return_button = document.querySelector('.return-button');

return_button.addEventListener('click', function() {
    document.getElementsByClassName('.card-2').style.display = "none";
    return_button.style.background = "blue";
});

const deal_button = document.querySelector('.deal-button');
deal_button.addEventListener('click', function() {
    document.getElementsByClassName('.card-2').style.display = "block";
    deal_button.style.background = "blue";

});