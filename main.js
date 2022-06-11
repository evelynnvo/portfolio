const return_button = document.querySelector('.return-button');
return_button.addEventListener('click', function() {
    $('.card-2').css('visibility','hidden');
    $('.card-2').css({'transform': 'translate(0,4em)'});
});

const deal_button = document.querySelector('.deal-button');
deal_button.addEventListener('click', function() {
    $('.card-2').css('visibility','visible');
});
