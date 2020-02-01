var menu_selector = ".header-cols__col_menu ul";
function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function() {

        var hash = $(this).attr("href");
        var target = $(hash);

        if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
            $(menu_selector + " a").removeClass("active");
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });
}

function sizeAndMaskInit(){

  $("input[name='phone']").mask("+7 999 999-99-99");
  $("a.policy__link").on('click', function() {
    $.fancybox.open($(".popup-policy"), {
      clickSlide : 'false',
      clickOutside : 'false',
      touch:false
    });
  });

  $(".item_info").on('click', function(e) {
    e.preventDefault();
    var product = $(this).attr('href');
    $.fancybox.open($(product), {
      clickSlide : 'false',
      clickOutside : 'false',
      touch:false
    });
  });

  $("a.buy.button").on('click', function() {
    var productName = $(this).parent().parent().find('h3').text();
    $("#product h2 span").text( productName );
    $("#product input[name='product']").val( productName );
    $.fancybox.open($("#product"), {
      clickSlide : 'false',
      clickOutside : 'false',
      touch:false
    });
  });
}

$(document).ready(function () {
  new WOW().init();

  $("#menu").mmenu({
     "pageScroll": true,
     navbar: {add: false},
     extensions: [
       "fx-menu-slide",
       "fx-panels-slide-100",
       "fx-listitems-slide",
       "position-right"
     ],
    });
    var api = $("#menu").data( "mmenu" );
    $("a.menu-button").click(function (){
      api.open();
    });
    $("a.close_menu").click(function (){
      api.close();
    });

    $("form").submit(function(e)
    {
      e.preventDefault();

      var sendform = true,
          confirmPolicy = $(this).find("input[name='acceptance']"),
          phoneInput = $(this).find("input[name='phone']");

      $(confirmPolicy).removeClass('red');
      $(phoneInput).removeClass('red');

      if (!$(confirmPolicy).prop("checked")){
        $(confirmPolicy).addClass('red');
        sendform = false;
      }

      if ($(phoneInput).val() == ''){
        $(phoneInput).addClass('red');
        sendform = false;
      }

      if (sendform){
        location.hash = 'ok';
        var dataSend = $(this).serialize();
        dataSend += '&'+window.location.search.replace( '?', '');
        $.ajax({
            url: 'mail.php',
            type: "POST",
            data: dataSend,
            success: function (res){
              window.location = "./thankyou.html";
            }
        });
      }
      return false;
    });

    sizeAndMaskInit();

    $('.faq__question').click(function(event) {
  		event.preventDefault();
  		$(this).toggleClass('faq__question_active');

  		if ( $(this).hasClass('faq__question_active') ) {
  			$(this)
  				.next('.faq__answer')
  				.slideDown(300);
  		} else {
  			$(this)
  				.next('.faq__answer')
  				.slideUp(300);
  		};
  	});

    $(".item__gallery").slick({
        dots: true,
        prevArrow: '<div class="slider__arrow slider__arrow-prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow-next"></div>',
        adaptiveHeight: true,
        slidesToShow: 1,
    });

    $(".reviews-slider").slick({
        dots: true,
        prevArrow: '<div class="slider__arrow slider__arrow-prev"></div>',
        nextArrow: '<div class="slider__arrow slider__arrow-next"></div>',
        adaptiveHeight: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    adaptiveHeight: true,
                    dots: true,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    adaptiveHeight: true,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: true,
                }
            }
        ]
    });

    $(".how-by-slider").slick({
        //dots: true,
        adaptiveHeight: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    adaptiveHeight: true,
                    dots: true,
                    prevArrow: '<div class="slider__arrow slider__arrow-prev"></div>',
                    nextArrow: '<div class="slider__arrow slider__arrow-next"></div>',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    dots: true,
                    prevArrow: '<div class="slider__arrow slider__arrow-prev"></div>',
                    nextArrow: '<div class="slider__arrow slider__arrow-next"></div>',
                }
            }
        ]
    });

    $(".faq-items__item").click(function () {
        var $this = $(this);

        if($this.hasClass("faq-items__item_active")) {
            $this.find(".faq-items__item-body").slideUp();
            $this.removeClass("faq-items__item_active");
        } else {
            $this.find(".faq-items__item-body").slideDown();
            $this.addClass("faq-items__item_active");
        }
    });

    $(".scrollTo[href]").on("click", function(e) {
      e.preventDefault();

      var elmentId = $(this).attr("href");
      $("html, body").animate({ scrollTop: ($(elmentId).offset().top - 150) }, 1000);
    });

    $(document).scroll(function(){
      var header = $('header.head'),
          scroll = $(window).scrollTop();

      if (scroll > 0) header.addClass('fixed');
      else header.removeClass('fixed');

      onScroll();
    });
});