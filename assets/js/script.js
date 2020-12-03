$(document).ready(function(){
    $('.dropdown-toggle').dropdown();
    // intro slider
    $('.intro-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        outhight:true,
        autoplaySpeed: 2000,
        autoplay:false,
        dots: true, 
        arrows:false, 
      });

      // counter plugin
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // search pop-up 
    $('.nav-section .nav-box .search-icon i').click(function(){
      $('.search-pop-up').addClass('open-popup');
      $('body').addClass('body-lay');
    });
    $('.close-pop').click(function(){
      $('.search-pop-up').removeClass('open-popup');
      $('body').removeClass('body-lay');
    });

    // open menu
    $('.nav-section .menu-open i').click(function(){
      $('.nav-section .nav-ul').addClass('open-menu-na');
      $('body').addClass('body-lay');
      $('.over-lay').show();
    });
    $('.nav-section .nav-ul .menu-colse i ,.over-lay').click(function(){
      $('.nav-section .nav-ul').removeClass('open-menu-na');
      $('body').removeClass('body-lay');
      $('.over-lay').hide();
    });


});