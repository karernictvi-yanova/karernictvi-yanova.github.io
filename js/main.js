(function($) {
    "use strict"; // Start of use strict

$(document).ready(function(){
    $('.owl-carousel-gallery').owlCarousel({
        loop:true,
        margin:10,
        items: 3,
        center: true,
        autoplay: false,
        nav: true,
        dots: false,
        pagination: false,
        autoWidth: true,
        navText: ["<img src='./img/slider/rightarrow.png' />", "<img src='./img/slider/leftarrow.png' />"],
        responsive:{
            0:{
                items:1.3,
                autoWidth: false,
                autoHeight: true
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
  });



  $(document).ready(function(){
    $('.owl-carousel-reviews').owlCarousel({
        loop:true,
        margin:50,
        items: 2,
        autoplay: false,
        autoHeight: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })
  });







    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
             $('.navbar').addClass('active');
        } else {
             $('.navbar').removeClass('active');
        }
    });



      
        // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top - 56)
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });
      
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '.navbar',
        offset: 100,

    });
      

    // Initialize and add the map

     // End of use strict

})(jQuery);

function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
    }
