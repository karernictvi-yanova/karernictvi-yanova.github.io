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
        autoHeight: true,
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


// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal', // set horizontal scroll
//   loop: true,
//   slidesPerView: 'auto',
//   centeredSlides: true,
//   spaceBetween: 10,
//   grabCursor: true,
//   autoplay: {
//     delay: 5000,
//     disableOnInteraction: false,
    
//   },
// });


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  slideToClickedSlide: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },
});


document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.background-video');
  if (!video) return;

  // Safari may still refuse (low-power mode, user setting …)
  video.play().catch(() => {
    // wait for the *first* user interaction and try again
    const resume = () => { video.play(); window.removeEventListener('touchstart', resume); };
    window.addEventListener('touchstart', resume, { once: true });
    window.addEventListener('click',     resume, { once: true });
  });
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


//   $('.background-video')[0].playbackRate = 0;



    if ($(window).scrollTop() >= -10) {
        $('.navbar').addClass('active');
    } else {
        $('.navbar').removeClass('active');
    }


    $(window).on('scroll', function () {
        if ( $(window).scrollTop() >= -10 ) {
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

    // closes the nav bar when we scroll
    $(window).on('scroll', function () {
        
        $('.navbar-collapse').collapse('hide');
    });

    
    // closes the nav bar when we click
    $(window).on('click', function () {
        
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
