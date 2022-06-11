var next_card = 2; // number of next card to deal
var prev_card = 1; // number of next card to return
var max_card = 5;

const return_button = document.querySelector('.return-button');
return_button.addEventListener('click', return_card());
document.keyDown(function(e) {
    if(e.keyCode === 37) {
        return_card();
    } else if(e.keyCode === 39) {
        deal_card();
    }
});

const deal_button = document.querySelector('.deal-button');
deal_button.addEventListener('click', deal_card());

function return_card() {
    if (prev_card > 1) {
        $('.card-' + (prev_card - 1)).css({ 'visibility': 'visible' });
        $('.card-' + prev_card).animate({ top: '33em' }, "slow").promise().done(function () {
            $('.card-' + prev_card).css('visibility', 'hidden');
                prev_card--;
                next_card--;
            if(next_card <= max_card) {
                $('.deal-button').css('visibility', 'visible');
            } 

            if(prev_card === 1) {
                $('.return-button').css('visibility', 'hidden');
            }
        });
    }
    return;
}

function deal_card() {
    if (next_card < max_card + 1) {
        $('.card-' + next_card).css('visibility', 'visible');
        $('.card-' + next_card).animate({ top: '-33em' }, "slow").promise().done(function () {
            $('.card-' + prev_card).css({ 'visibility': 'hidden' });
            prev_card++;
            next_card++;
            if(next_card > max_card) {
                $('.deal-button').css('visibility', 'hidden');
            }
            
            if(prev_card > 1) {
                $('.return-button').css('visibility', 'visible');
            }
        });
    }
    return;
}