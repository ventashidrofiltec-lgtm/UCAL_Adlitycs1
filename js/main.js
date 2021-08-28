
/*SOBRE MI BUTTON*/
$(document).ready(function() {
  $('.about_button').click(function() {
    $('*').animate(
      {
        scrollTop: $('#about').offset().top
      },
      1700
    );
  });
});

/*CONTACT BUTTON*/
$(document).ready(function() {
  $('.contact-button').click(function() {
    $('*').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*CONTACT_ME BUTTON*/
$(document).ready(function() {
  $('#contact_me').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*top buttons mobile version*/
/*SOBRE MI BUTTON*/
$(document).ready(function() {
  $('#b-about2').click(function() {
    $('html').animate(
      {
        scrollTop: $('#about').offset().top
      },
      1700
    );
  });
});

/*CONTACT BUTTON*/
$(document).ready(function() {
  $('#b-contact2').click(function() {
    $('body').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*CONTACT_ME BUTTON*/
$(document).ready(function() {
  $('#contact_me').click(function() {
    $('body').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*'ABOUT ME' MENU LINK*/
$(document).ready(function() {
  $('.About').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#about').offset().top
      },
      1700
    );
  });
});

/*'INTERESTS' MENU LINK*/
$(document).ready(function() {
  $('.Interests').click(function() {
    $('body,html').animate(
      {
        scrollTop: $('#interests').offset().top
      },
      1700
    );
  });
});

/*'TODAY' MENU LINK*/
$(document).ready(function() {
  $('.Today').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#today').offset().top
      },
      1700
    );
  });
});

/*'EVENTS' MENU LINK*/
$(document).ready(function() {
  $('.Events').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#events').offset().top
      },
      1700
    );
  });
});

/*'CONTACTO' MENU LINK*/
$(document).ready(function() {
  $('.Contact').click(function() {
    $('body,html').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*BACK TO TOP BUTTON*/
$(document).ready(function() {
  $('.top').click(function() {
    $('body, html').animate(
      {
        scrollTop: '0px'
      },
      1000
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
      1000
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

/*VALIDA EL NÚMERO DE TELÉFONO*/
function justNumbers(e) {
  var keynum = window.event ? window.event.keyCode : e.which;
  if (keynum == 8 || keynum == 46) return true;

  return /\d/.test(String.fromCharCode(keynum));
}

/*THIS SHOWS AND HIDES MENU ITEMS*/
$(document).ready(function() {
  $('.hamburguer-btn .fa-times').hide();

  $('.hamburguer-btn .fa-bars').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-times').show();
    $('.mobile_menu1 a li').addClass('active');
  });

  /*cierra automaticamente menu luego de hacer clic en un enlace*/
  $('.mobile_menu1').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.hamburguer-btn .fa-times').hide();
  });

  $('.hamburguer-btn .fa-bars').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-times').show();
    $('.mobile_menu1').show();
  });

  $('.hamburguer-btn .fa-times').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.mobile_menu1').hide();
  });
});
