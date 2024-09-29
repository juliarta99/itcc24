$(document).ready(function() {
    // $(window).on('scroll', function() {
    //     var $navbar = $('#navbar');
    //     // var $btnLogin = $('#btn-login');
    //     // var $search = $('#search-top');
    //     var $navLink = $('.nav-link');
        
    //     if ($(window).scrollTop() > 1) {
    //         $navbar.addClass("shadow-md bg-white");
    //         // $btnLogin.removeClass("bg-transparent");
    //         // $search.removeClass("bg-transparent");
    //         $navLink.removeClass("text-white");
    //     } else {
    //         $navbar.removeClass("shadow-md bg-white");
    //         // $btnLogin.addClass("bg-transparent");
    //         // $search.addClass("bg-transparent");
    //         if ($navLink.attr('data-white') === "1") {
    //             $navLink.addClass("text-white");
    //         }
    //     }
    // });

    function checkScroll() {
        var $navbar = $('#navbar');
        var $navLink = $('.nav-link');
        
        // Jika posisi scroll lebih dari 1
        if ($(window).scrollTop() > 1) {
            $navbar.addClass("shadow-md bg-white");
            $navLink.removeClass("text-white");
        } else {
            $navbar.removeClass("shadow-md bg-white");
            if ($navLink.attr('data-white') === "1") {
                $navLink.addClass("text-white");
            }
        }
    }

    // Jalankan fungsi pada event scroll
    $(window).on('scroll', checkScroll);

    // Jalankan fungsi ketika halaman selesai dimuat
    checkScroll();
});