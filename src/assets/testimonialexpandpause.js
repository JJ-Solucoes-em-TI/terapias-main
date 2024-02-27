$(document).ready(function(){
    var owl = $('.testimonial-carousel');
    owl.owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('.testimonial-text').hover(function(){
        owl.trigger('stop.owl.autoplay');
        $(this).css('max-height', 'none');
    }, function(){
        owl.trigger('play.owl.autoplay');
        $(this).css('max-height', '50px');
    });

    owl.on('changed.owl.carousel', function(event) {
        $('.testimonial-text').css('max-height', '50px');
    });
});