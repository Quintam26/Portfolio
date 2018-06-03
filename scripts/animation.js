
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

$('input').filter(':checkbox').prop('checked',false);

$('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
