$(document).ready(function($) {
  $('ul li:nth-child(1)').click(function(){
    $('html, body').animate({
    scrollTop: $(".top-navigation").offset().top
}, 250);
  });
    $('ul li:nth-child(2)').click(function(){
    $('html, body').animate({
    scrollTop: $(".properties").offset().top
}, 250);
    });
        $('ul li:nth-child(3)').click(function(){
    $('html, body').animate({
    scrollTop: $(".properties1").offset().top
}, 250);
    });
      $('ul li:nth-child(4)').click(function(){
    $('html, body').animate({
    scrollTop: $(".contact").offset().top
}, 250);
    });
  
});