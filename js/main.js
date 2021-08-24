/*BACK TO TOP BUTTON*/
$(document).ready(function() {
    $('.top').click(function() {
      $('body, html').animate(
        {
          scrollTop: '0px'
        },
        2000
      );
    });
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('.top').slideDown(0);
      } else {
        $('.top').slideUp(0);
      }
    });
  });
  
  /*BACK TO TOP BUTTON mobile*/
  $(document).ready(function() {
    $('.top2').click(function() {
      $('body').animate(
        {
          scrollTop: '0px'
        },
        2000
      );
    });
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0) {
        $('.top2').slideDown(0);
      } else {
        $('.top2').slideUp(0);
      }
    });
  });