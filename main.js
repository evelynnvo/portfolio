// const card = document.querySelector('.card-inner');
// card.addEventListener('click', function () {
//     card.classList.toggle('is-flipped');
//     const cardHeaderFront = document.querySelector('.card-header-front');
//     cardHeaderFront.classList.toggle('is-flipped');
// });

var top_card = 2;
var total_deck_cards = 2;
for(let i = 1; i < total_deck_cards; i++) {
    if (!document.getElementsByClassName(".card-" + top_card)) {
        document.getElementsByClassName(".card-" + top_card).style.visibility = "hidden";
    }
}
