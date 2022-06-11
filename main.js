var next_card = 2; // number of next card to deal
var prev_card = 1; // number of next card to return
var max_card = 5;

const return_button = document.querySelector('.return-button');
return_button.addEventListener('click', function () {
    if (prev_card > 1) {
        $('.card-' + (prev_card - 1)).css({ 'visibility': 'visible' });
        $('.card-' + prev_card).animate({ top: '33em' }, "slow").promise().done(function () {
            $('.card-' + prev_card).css('visibility', 'hidden');
            if(prev_card > 1) {
                prev_card--;
                next_card--;
            }
        });
    }
});

const deal_button = document.querySelector('.deal-button');
deal_button.addEventListener('click', function () {
    if (next_card < max_card + 1) {
        $('.card-' + next_card).css('visibility', 'visible');
        $('.card-' + next_card).animate({ top: '-33em' }, "slow").promise().done(function () {
            $('.card-' + prev_card).css({ 'visibility': 'hidden' });
            prev_card++;
            next_card++;
        });
    }
});
