$(document).ready(function() {
    $('.accordion-header').click(function() {
        $(this).next('.accordion-content').slideToggle(300);
        $('.accordion-content').not($(this).next()).slideUp(300);
        var imageSrc = $(this).data('image');
        $('#image-display').attr('src', imageSrc);
    });
});