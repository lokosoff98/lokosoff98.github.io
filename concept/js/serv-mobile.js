jQuery(document).ready(function($) {
	var servActiveIterator = false;

	var servActiveSlider = function() {
		$(".serv-wrap-slider").addClass('serv-wrap-slider-mob');
		$(".serv-arrow-box").addClass('serv-arrow-a');
		$(".serv-box").addClass('serv-box-mob');
		$(".serv-item").addClass('serv-item-mob');
	}

	var servRemoveSlider = function() {
		$(".serv-wrap-slider").removeClass('serv-wrap-slider-mob');
		$(".serv-arrow-box").removeClass('serv-arrow-a');
		$(".serv-box").removeClass('serv-box-mob');
		$(".serv-item").removeClass('serv-item-mob');
	}

	var servSliderActive = function() {
		servActiveIterator = true;

		servActiveSlider();

		var 
			slider = $(".serv-box"),
			slide = $(".serv-item"),
			slideAll = 0;
			arrowLeft = $(".serv-arrow-left"),
			arrowRight = $(".serv-arrow-right");

		var 
			widthMainBox = $(".serv-wrap-slider").width(),
			iteratorServ = 0;

		slide.each(function(index, el) {
			slideAll++;
		});

		slideAll--;

		var translateRight = function() {
			iteratorServ++;
			if (iteratorServ <= slideAll){
				slider.css("marginLeft", -widthMainBox*iteratorServ);
			}
			else{
				iteratorServ = 0;
				slider.css("marginLeft", iteratorServ);
			}
		}

		var translateLeft = function() {
			iteratorServ--;
			if (iteratorServ < 0){
				iteratorServ = slideAll;
				slider.css("marginLeft", -widthMainBox*iteratorServ);
			}
			else{
				slider.css("marginLeft", -widthMainBox*iteratorServ);
			}
		}

		arrowRight.click(translateRight);
		arrowLeft.click(translateLeft);
	}

	if ( $(window).width() < 600 ) {
		servSliderActive();
	}

	$(window).resize(function() {
		if ( $(window).width() < 600 && servActiveIterator === false) {
			servSliderActive();
		}

		else if ( $(window).width() > 601 ) {
			servActiveIterator = false;
			servRemoveSlider();
		}
	});
});