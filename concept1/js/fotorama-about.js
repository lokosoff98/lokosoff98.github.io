jQuery(document).ready(function($) {
	var 
		wrapFoto = $(".about-main-foto-wrapper"),
		arrowLeft = $(".about-arrow-left"),
		arrowRight = $(".about-arrow-right"),
		aboutDots = $(".about-dots");

	var 
		widthMainBox = $(".about-main-foto-box").width(),
		iteratorAbout = 0;

	var addBorderDots = function(index) {
		aboutDots.removeClass('about-dots-active');
		aboutDots.eq(index).addClass('about-dots-active');
	}

	var translateImage = function() {
		var pxNumber = $(this).attr("data-about-dots");
		iteratorAbout = pxNumber;
		wrapFoto.css("marginLeft", -widthMainBox*pxNumber);
		addBorderDots(iteratorAbout);
	}

	var translateRight = function() {
		iteratorAbout++;
		if (iteratorAbout <= 7){
			wrapFoto.css("marginLeft", -widthMainBox*iteratorAbout);
			addBorderDots(iteratorAbout);
		}
		else{
			iteratorAbout = 0;
			wrapFoto.css("marginLeft", iteratorAbout);
			addBorderDots(iteratorAbout);
		}
	}

	var translateLeft = function() {
		iteratorAbout--;
		if (iteratorAbout < 0){
			iteratorAbout = 7;
			wrapFoto.css("marginLeft", -widthMainBox*iteratorAbout);
			addBorderDots(iteratorAbout);
		}
		else{
			wrapFoto.css("marginLeft", -widthMainBox*iteratorAbout);
			addBorderDots(iteratorAbout);
		}
	}

	aboutDots.click(translateImage);
	arrowRight.click(translateRight);
	arrowLeft.click(translateLeft);
});