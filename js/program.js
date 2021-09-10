window.onload = function () {
    $('#onload').fadeOut('slow');
    setInterval(() => {
        $('body').removeClass('preloader');
    }, 400);
}

$(document).ready(function () {
    $(this).scrollTop(0);
});