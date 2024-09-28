$(document).ready(function() {
    $(window).on('scroll', function() {
        var $navbar = $('#navbar');
        // var $btnLogin = $('#btn-login');
        // var $search = $('#search-top');
        var $navLink = $('.nav-link');
        
        if ($(window).scrollTop() > 1) {
            $navbar.addClass("shadow-md bg-white");
            // $btnLogin.removeClass("bg-transparent");
            // $search.removeClass("bg-transparent");
            $navLink.removeClass("text-white");
        } else {
            $navbar.removeClass("shadow-md bg-white");
            // $btnLogin.addClass("bg-transparent");
            // $search.addClass("bg-transparent");
            if ($navLink.attr('data-white') === "1") {
                $navLink.addClass("text-white");
            }
        }
    });
});