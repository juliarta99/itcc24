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
        var $humbergerSpan = $('#humberger span');
        
        // Jika posisi scroll lebih dari 1
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

    // Jalankan fungsi pada event scroll
    $(window).on('scroll', checkScroll);

    // Jalankan fungsi ketika halaman selesai dimuat
    checkScroll();
});