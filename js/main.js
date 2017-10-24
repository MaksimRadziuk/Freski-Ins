
/*$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});*/


/*var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 7000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });
});


function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#viewport').width() * (slideCount - 1);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}*/
"use strict";
//активация модального окна заказать звонок
$(document).ready(function(){
  $(".btn").click(function() {
    $("#modal-call").modal('show');
  });
});

// работа label:checked B iOS & iPad
var deviceAgent = navigator.userAgent.toLowerCase();
    var iOS = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (iOS) {
        $('label').click(function (event) {
            $('#' + $(event.target).attr('for')).attr('checked', true).change();
        });
    }

// выведение меню навигации (мобилки)
$(document).ready(function(){
  $(".nav-mobile").click(function() {
    $(".hidden-menu").addClass('show');
  });
});

// закрытие меню навигации (мобилки)
$(document).ready(function(){
  $(".close-hidden-menu").click(function() {
    $(".hidden-menu").removeClass('show');
  });
});

//выведение модального окна СПАСИБО!
$(document).ready(function(){
  $(".modal-footer").click(function() {
    $("#modal-thankyou").modal('show');
  });
});

//закрытие окна звонка при отсылке формы обратной свзи
$(document).ready(function(){
  $("#req-call").click(function() {
    $("#modal-call").removeClass('show');
  });
});


//открытие и закрытие блоков каталога
$(document).ready(function(){
  $("#toggleView1").click(function() {
    $(".catalog-style").toggleClass('hide');
  });
});

$(document).ready(function(){
  $("#toggleView").click(function() {
    $(".catalog-type").toggleClass('hide');
  });
});

$(document).ready(function(){
  $("#toggleView2").click(function() {
    $(".colorpick-content-block").toggleClass('hide');
  });
});



//использование слик-карусели(карточка товара)
$('.carusel-block').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
      }
    }
  ]
});
