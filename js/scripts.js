var num = 250;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.navigation').addClass('navbar-fixed-top ');
    } else {
        $('.navigation').removeClass('navbar-fixed-top ');
    }
});

