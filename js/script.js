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