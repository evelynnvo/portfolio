var next_card = 2; // number of next card to deal
var prev_card = 1; // number of next card to return

const return_button = document.querySelector('.return-button');
return_button.addEventListener('click', function () {
    $('.card-' + (prev_card - 1)).css({ 'visibility': 'visible' });
    $('.card-' + prev_card).animate({top: '33em'}, "slow").promise().done(function() {
        $('.card-' + prev_card).css('visibility','hidden');
    });

    prev_card--;
    next_card--;
});

const deal_button = document.querySelector('.deal-button');
deal_button.addEventListener('click', function () {
    $('.card-' + next_card).css('visibility', 'visible');
    $('.card-' + next_card).animate({top: '-33em'}, "slow").promise().done(function() {
            $('.card-' + prev_card).css({ 'visibility': 'hidden' });
    });

    prev_card++;
    next_card++;
});
