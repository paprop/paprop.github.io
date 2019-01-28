$(document).ready(function($) {

  $('ul li:nth-child(1)').click(function(){
    $('html, body').animate({
    scrollTop: $(".introduction").offset().top
}, 400);
  });
    $('ul li:nth-child(2)').click(function(){
    $('html, body').animate({
    scrollTop: $(".about").offset().top
}, 400);
    });
        $('ul li:nth-child(3)').click(function(){
    $('html, body').animate({
    scrollTop: $(".investments").offset().top
}, 400);
    });
      $('ul li:nth-child(4)').click(function(){
    $('html, body').animate({
    scrollTop: $(".criteria").offset().top
}, 400);
    });

     $('ul li:nth-child(5)').click(function(){
    $('html, body').animate({
    scrollTop: $(".contact").offset().top
}, 400);
    });
  
});
