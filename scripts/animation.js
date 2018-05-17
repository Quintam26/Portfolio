
//Scrolling effect
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

$('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

//Closing bugrer menu after selecting option
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('input').filter(':checkbox').prop('checked',false);
});