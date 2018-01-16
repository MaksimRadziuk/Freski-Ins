
$(document).ready(function(){
  $('.mid-part').masonry({
  });
});





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
//меню фильтра
$(document).ready(function(){
  $("#filter").click(function() {
    $(".filter-menu").addClass('show');
  });
});

// закрытие меню навигации (мобилки)
$(document).ready(function(){
  $(".close-hidden-menu").click(function() {
    $(".hidden-menu").removeClass('show');
  });
});
//закрытие меню фильтра
$(document).ready(function(){
  $(".close-filter-menu").click(function() {
    $(".filter-menu").removeClass('show');
  });
});

//закрытие окна звонка при отсылке формы обратной свзи
$(document).ready(function(){
  $("#req-call").click(function() {
    $("#modal-call").removeClass('show');
  });
});


$('#modal-call').on('hidden.bs.modal', function() {
  $("#modal-thankyou").addClass('show');
})

$(document).ready(function(){
  $(".close-thankyou").click(function() {
    $("#modal-thankyou").removeClass('show');
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


//открытие ответа в ФАК 
var sl = document.getElementsByClassName("toggle-point");
var i;

for (i = 0; i < sl.length; i++) {
    sl[i].onclick = function() {
        this.classList.toggle("toggle-point");
        this.classList.toggle("color");
        this.nextElementSibling.classList.toggle("show");
        this.getElementsByTagName('span')[0].classList.toggle("colorSpan");
    }
}

var sl = document.getElementsByClassName("toggle1-point");
var i;

for (i = 0; i < sl.length; i++) {
    sl[i].onclick = function() {
        this.classList.toggle("toggle1-point");
        this.classList.toggle("mobile-color");
        this.nextElementSibling.classList.toggle("show");
        this.getElementsByTagName('span')[0].classList.toggle("colorSpan");
    }
}


$("[data-fancybox]").fancybox({

  });


//вызов выбора материала
$(document).ready(function(){
  $("#chooseMaterial").click(function() {
    $("#modal-choose").modal('show');
  });
});


// установка высоты блока материалы в зависимости от родительского 
/*$(document).ready(function(){
  if (window.innerWidth > 886) {
    var textureHeight = $('.textureBox').parent('.textureRow').height();
    $(".textureBox").css('height', textureHeight);
  }
  else {}
});*/

$(document).ready(function(){
  if (window.innerWidth > 886) {
    
    $(".textureBox").each(function(){ 
      var h = $(this).closest(".textureRow").height(); 
      $(this).css('height', h); 
    });

  }

  else {}

});