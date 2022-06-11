const return_button = document.querySelector('.return-button');
return_button.addEventListener('click', function () {
    // $('.card-2').css('visibility','hidden');
    $('.card-2').css({ 'transform': 'translate(0,-4em)' });
    $('.card-2').css({ 'transform': 'translate(0,-33.72em)' });
    $('.card-2').css({ 'transition': 'transform 1s cubic-bezier(.25,0,.28,1.43)' });
    $('.card-1').css({ 'visibility': 'hidden'});

});

const deal_button = document.querySelector('.deal-button');
deal_button.addEventListener('click', function () {
    $('.card-2').css('visibility', 'visible');
});
