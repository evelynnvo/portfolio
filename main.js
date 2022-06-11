const return_button = document.querySelector('.return-button');
return_button.addEventListener('click', function () {
    $('.card-2').css('visibility','hidden');
});

const deal_button = document.querySelector('.deal-button');
deal_button.addEventListener('click', function () {
    $('.card-2').css('visibility', 'visible');
    $('.card-2').animate({top: '-33em'}).promise().done(function() {
            $('.card-1').css({ 'visibility': 'hidden' });

    });
});
