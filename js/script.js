$(document).ready(function() {
    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle(300);
        $('.accordion-content').not($(this).next()).slideUp(300);
        var imageSrc = $(this).data('image');
        $('#image-display').attr('src', imageSrc);
    });
});

var swiper = new Swiper(".swiper-menu", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".swiper-learnings", {
    slidesPerView: 4,
    spaceBetween: 0,
    // loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".swiper-learnings-dashboard", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".swiper-menu-testimoni", {
    // slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1000
});

var swiper = new Swiper(".swiper-menu-learning", {
    slidesPerView: 7,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


$(document).ready(function() {
    $('.side-bar-link').click(function() {
        $('.side-bar-link').removeClass('active');
        
        $(this).addClass('active');
        $('[id^="content-dashboard"]').addClass('hidden');
        
        var target = $(this).data('target');
        $(target).removeClass('hidden');
    });
});

$(document).ready(function() {
    $('.show-class-link').click(function() {
        $('.show-class-link').removeClass('bg-primary text-white');
        
        $(this).addClass('bg-primary text-white');
        $('[id^="show-class"]').addClass('hidden');
        
        var target = $(this).data('target');
        $(target).removeClass('hidden');
    });
});
