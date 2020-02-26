jQuery(document).ready(function($) {
	var 
		slider = $(".sertificat-slider"),
		slide = $(".sertificat-slide"),
		slideAll = 0,
		arrowLeft = $(".sertificat-arrow-left"),
		arrowRight = $(".sertificat-arrow-right");

	var 
		widthMainBox = $(".sertificat-box").width(),
		iteratorSerf = 0;

	var 
		aSlide = 0,
		bSlide = 0;

	slide.each(function(index, el) {
		slideAll++;
	});

	var varibABslide = function() {
		if ( $(window).width() < 600 ) {
			aSlide = 1;
			bSlide = 1;

			slider.css("width", $(".sertificat-box").width() * slide.length);
			slide.css("width", slider.width() / slide.length);

		}
		else{
			aSlide = 2;
			bSlide = 2;

			slider.css("width", $(".sertificat-box").width() * slide.length);
			slide.css("width", (slider.width() / slide.length) / 2 );
		}
	}

	varibABslide();

	$(window).resize(function(event) {
		varibABslide();
	});

	var translateRight = function() {
		iteratorSerf++;
		if (iteratorSerf <= slideAll-aSlide){
			slider.css("marginLeft", -widthMainBox/bSlide*iteratorSerf);
		}
		else{
			iteratorSerf = 0;
			slider.css("marginLeft", iteratorSerf);
		}
	}

	var translateLeft = function() {
		iteratorSerf--;
		if (iteratorSerf < 0){
			iteratorSerf = slideAll-aSlide;
			slider.css("marginLeft", -widthMainBox/bSlide*iteratorSerf);
		}
		else{
			slider.css("marginLeft", -widthMainBox/bSlide*iteratorSerf);
		}
	}

	arrowRight.click(translateRight);
	arrowLeft.click(translateLeft);
});