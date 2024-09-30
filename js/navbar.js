$(document).ready(function() {
    function checkScroll() {
        var $navbar = $('#navbar');
        var $navLink = $('.nav-link');
        var $humbergerSpan = $('#humberger span');
        
        if ($(window).scrollTop() > 1) {
            $navbar.addClass("shadow-md bg-white");
            $navLink.removeClass("text-white");
            $humbergerSpan.removeClass("bg-white-important");
        } else {
            $navbar.removeClass("shadow-md bg-white");
            if ($navLink.attr('data-white') === "1") {
                $navLink.addClass("text-white");
            }
            if ($humbergerSpan.attr('data-white') === "1") {
                $humbergerSpan.addClass("bg-white-important");
            }
        }
    }

    $(window).on('scroll', checkScroll);
    checkScroll();
});