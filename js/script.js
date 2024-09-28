$(document).ready(function() {
    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle(300);
        $('.accordion-content').not($(this).next()).slideUp(300);
        var imageSrc = $(this).data('image');
        $('#image-display').attr('src', imageSrc);
    });

    $('.side-bar-link').click(function() {
        $('.side-bar-link').removeClass('active');
        
        $(this).addClass('active');
        $('[id^="content-dashboard"]').addClass('hidden');
        
        var target = $(this).data('target');
        $(target).removeClass('hidden');
    });

    $('.show-class-link').click(function() {
        $('.show-class-link').removeClass('bg-primary text-white');
        
        $(this).addClass('bg-primary text-white');
        $('[id^="show-class"]').addClass('hidden');
        
        var target = $(this).data('target');
        $(target).removeClass('hidden');
    }); 
    
    $('.humberger').click(function() {
        $('.humberger').toggleClass('active');
        $('.nav-mobile').toggleClass('show');
    })
});
var swiper = new Swiper(".swiper-partners", {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    speed: 3000,
    freeMode: true,
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 10,
        }, 
        1024: {
            slidesPerView: 8,
            spaceBetween: 10,
        }
    }
});

var swiper = new Swiper(".swiper-menu", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 10,
        }, 
        1024: {
            slidesPerView: 5,
            spaceBetween: 10,
        }
    }
});

var swiper = new Swiper(".swiper-learnings", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }, 
        1024: {
            slidesPerView: 4
        }
    }
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
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true
    // },
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