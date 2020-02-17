jQuery(document).ready(function($) {
	$("body, html").on("click","a", function (event) {
	    //отменяем стандартную обработку нажатия по ссылке
	    event.preventDefault();
	    //забираем идентификатор бока с атрибута href
	    var id  = $(this).attr('href'),
	    //узнаем высоту от начала страницы до блока на который ссылается якорь
	    top = $(id).offset().top;
	    //анимируем переход на расстояние - top за 1500 мс
	    $('body,html').animate({scrollTop: top}, 400);
	});

	// Попапы - обратный звонок

	var callbackBtn = $(".menu-comm-callback-btn"),
		twoCallbackBtn = $(".prise-phone"),
		popupCallbackWrap = $(".popup-callback-wrap"),
		popupCallbackClous = $(".popup-callback-clous"),
		popupCallbackBlock = $(".popup-callback-block");

	var showPopupCallback = function() {
		popupCallbackWrap.addClass('popup-wrap-act');
		setTimeout(function() {
			popupCallbackClous.addClass('popup-clous-act');
			setTimeout(function() {
				popupCallbackBlock.addClass('popup-block-act');
			},300);
		},500);
	}

	var hiddenPopupCallback = function() {
		popupCallbackBlock.removeClass('popup-block-act');
		setTimeout(function() {
			popupCallbackClous.removeClass('popup-clous-act');
			setTimeout(function() {
				popupCallbackWrap.removeClass('popup-wrap-act');
			},500);
		},200);
	}

	callbackBtn.click(showPopupCallback);
	popupCallbackClous.click(hiddenPopupCallback);
	twoCallbackBtn.click(showPopupCallback);


	// Попапы - Заказать консультацию

	var ctaBtn = $(".offer-btn, .cases-btn, .prise-bull-img"),
		popupCtaWrap = $(".popup-cta-wrap"),
		popupCtaClous = $(".popup-cta-clous"),
		popupCtaBlock = $(".popup-cta-block");

	var showPopupCta = function() {
		popupCtaWrap.addClass('popup-wrap-act');
		setTimeout(function() {
			popupCtaClous.addClass('popup-clous-act');
			setTimeout(function() {
				popupCtaBlock.addClass('popup-block-act');
			},300);
		},500);
	}

	var hiddenPopupCta = function() {
		popupCtaBlock.removeClass('popup-block-act');
		setTimeout(function() {
			popupCtaClous.removeClass('popup-clous-act');
			setTimeout(function() {
				popupCtaWrap.removeClass('popup-wrap-act');
			},500);
		},200);
	}

	ctaBtn.click(showPopupCta);
	popupCtaClous.click(hiddenPopupCta);

	// Фокус на input

	var inputBlock = $(".inp"),
		thisInputBlock;

	inputBlock.focus(function() {
		$(".inp-block").removeClass('inp-block-focus');
		$(this).parents(".inp-block").addClass('inp-block-focus');
		thisInputBlock = $(this).parents(".inp-block");

		$('body').click(function(evt) {
			if (!$(evt.target).hasClass('inp')){
				if($(".inp-block-focus")) {
					thisInputBlock.removeClass('inp-block-focus');
				}
			}
		});
	});

	// Табы кейсов

	var tabCases = $(".cases-tabs-item"),
		itemCases = $(".cases-item");

	var toogleCases = function() {
		tabCases.removeClass('cases-tabs-active');
		$(this).addClass('cases-tabs-active');

		var casesNumber = $(this).attr("data-cases");

		itemCases.removeClass('cases-item-active');
		$(".cases-" + casesNumber).addClass('cases-item-active');
	}

	tabCases.click(toogleCases);


	// -------Табы этапов работ--------------

	var tabStage = $(".stage-tab"),
		itemStage = $(".stage-content-item");

	var toogleStage = function() {
		tabStage.removeClass('stage-tab-active');
		$(this).addClass('stage-tab-active');

		var stageNumber = $(this).attr("data-stage");

		itemStage.removeClass('stage-active');
		$(".stage-" + stageNumber).addClass('stage-active');
	}

	tabStage.click(toogleStage);

	// Работы в попапе

	var linkMaket = $(".cases-preview-box"),
		maketClous = $(".maket-clous"),
		maketImg = $(".maket-img");

	var showMaket = function() {
		var maketVar = $(this).attr("data-maket");
		maketImg.attr({
			src: "img/maket-" + maketVar + ".jpg"
		});

		$(".maket-wrap").addClass('maket-wrap-act');
	}

	var hiddenMaket = function() {
		maketImg.attr({
			src: ""
		});

		$(".maket-wrap").removeClass('maket-wrap-act');
	}


	linkMaket.click(showMaket);
	maketClous.click(hiddenMaket);
});