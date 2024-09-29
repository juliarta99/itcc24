$(document).ready(function() {
    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle(300);
        $('.accordion-header').removeClass('bg-primary');
        $(this).toggleClass('bg-primary');
        $('.accordion-content').not($(this).next()).slideUp(300);
    });

    $('.side-bar-link').click(function() {
        const namePage = $(this).find('.name-link-side-bar');
        $('#title-has-page-dashboard').html(namePage.html());

        $('.side-bar-link').removeClass('active');
        $(this).addClass('active');
        $('[id^="content-dashboard"]').addClass('hidden');
        var target = $(this).data('target');
        $(target).removeClass('hidden');

        $('.humberger-dashboard').removeClass('active');
        $('#side-bar').removeClass('show');
        $('body').removeClass('overflow-hidden');
        $('.nav-mobile-trigger-side-bar').removeClass('up');
    });
    
    $('.humberger').click(function() {
        $('.humberger').toggleClass('active');
        $('.nav-mobile').toggleClass('show');
        $('body').toggleClass('overflow-hidden');
    });

    $('.humberger-dashboard').click(function() {
        $('.humberger-dashboard').toggleClass('active');
        $('#side-bar').toggleClass('show');
        $('body').toggleClass('overflow-hidden');
        $('.nav-mobile-trigger-side-bar').toggleClass('up');
    });

    $('.show-class-link').click(function() {
        $('.show-class-link').removeClass('bg-primary text-white');
        
        $(this).addClass('bg-primary text-white');
        $('[id^="show-class"]').addClass('hidden');
        
        var target = $(this).data('target');
        $(target).removeClass('hidden');
    }); 

    $('#toggle-profile').click(function() {
        $('#menu-account').toggleClass('show');
        const icon = $("#icon-toggle-profile");
        if (icon.hasClass('bx-chevron-down')) {
            icon.removeClass('bx-chevron-down').addClass('bx-chevron-up');
        } else {
            icon.removeClass('bx-chevron-up').addClass('bx-chevron-down');
        }
    });

    $('#btn-collapse').click(function() {
        const icon = $(this).find('i');
        if (icon.hasClass('bx-left-arrow-circle')) {
            icon.removeClass('bx-left-arrow-circle').addClass('bx-right-arrow-circle');
        } else {
            icon.removeClass('bx-right-arrow-circle').addClass('bx-left-arrow-circle');
        }
        $('#title-side-bar').toggleClass('hidden');
        $('.name-link-side-bar').toggleClass('hidden');
        $('.side-bar-link').toggleClass('justify-center');

        if($('#title-side-bar').hasClass('hidden')) {
            $('#container-dashboard').css('grid-template-columns', `max-content calc(100% - 300px)`);
            const sidebarWidth = $('#side-bar').outerWidth();
            $('#container-dashboard').css('grid-template-columns', `max-content calc(100% - ${sidebarWidth}px)`);
        } else {
            $('#container-dashboard').css('grid-template-columns', `300px calc(100% - 300px)`);
        }
    });  
    
    const datasChart = [90, 70, 80, 102, 80];
    const monthsChart = ['09/09', '10/09', '11/09', '12/09', '13/09'];
    $.each(datasChart, function(index, value) {
        $('#barChart').append('<div class="bar" title="' + monthsChart[index] + ' - ' + value +' menit"><span class="text-xs">' + value + '</span></div>');
    });
    $.each(monthsChart, function(index, month) {
        $('#monthLabels').append('<div class="month-label text-xs">' + month + '</div>');
    });
    $('#barChart .bar').each(function(index) {
        $(this).animate({ height: datasChart[index] * 3 + 'px' }, 1000);
    });
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

var swiper = new Swiper(".swiper-2", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});
var swiper = new Swiper(".swiper-learnings", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            loop: false,
        },
        768: {
            slidesPerView: 3,
            loop: false,
        }, 
        1024: {
            slidesPerView: 4,
            loop: false,
        }
    }
});

var swiper = new Swiper(".swiper-learnings-dashboard", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        900: {
            slidesPerView: 2
        }, 
        1024: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".swiper-menu-testimoni", {
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
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
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 5
        }, 
        1024: {
            slidesPerView: 7
        }
    }
});