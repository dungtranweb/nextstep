// Smooth scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Set position when change navbar's height and background-color
var nav_height = $('.navbar').height() - 1;

function navSlide() {
  var scroll_top = $(window).scrollTop();

  if (scroll_top > nav_height) {
    $('.navbar').addClass('navbar-scroll');
  } else {
    $('.navbar').removeClass('navbar-scroll');
  }
}

$(window).scroll(navSlide);

// Set browser width to apply auto_hide_navbar & WOW.js
var browser_width = $(window).width();

if(browser_width < 769) {
  $('.navbar').removeClass('affix');
  $('.navbar').addClass('navbar-fixed-top');
  $('.navbar').autoHidingNavbar();
} else {
  new WOW().init();
}

// Slider
$(document).ready(function() {
  // Header
  $('.header-slider').flexslider({
    animation: "slide",
    animationSpeed: 1000,
    directionNav: false,
    controlsContainer: $(".custom-controls-container")
  });

  // Mockups
  $('.mockups').flexslider({
    animation: "fade",
    animationSpeed: 1000,
    controlNav: false,
    directionNav: false
  });

  // Apps link
  var link = $('.owl-carousel');

  link.owlCarousel({
    items: 5,
    loop: true,
    center: true,
    autoWidth: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 7000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3
      },
      992: {
        items: 5
      }
    }
  });
});
