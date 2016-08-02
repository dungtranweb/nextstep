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

// Set browser width to apply auto_hide_navbar
$(document).ready(function() {
  var browser_width = $(window).width();

  if(browser_width < 768) {
    $('.navbar').removeClass('affix');
    $('.navbar').addClass('navbar-fixed-top');
    $('.navbar').autoHidingNavbar();
  }
})
