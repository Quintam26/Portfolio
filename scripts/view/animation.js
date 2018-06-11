'use strict';

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

$('input').filter(':checkbox').prop('checked',false);

});
