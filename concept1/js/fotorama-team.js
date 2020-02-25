jQuery(document).ready(function($) {
	var 
		wrapFoto = $(".team-slider-wrap"),
		arrowLeft = $(".team-arrow-left"),
		arrowRight = $(".team-arrow-right"),
		teamDots = $(".team-dots-block");

	var 
		widthMainBox = $(".team-slider-main").width(),
		iteratorTeam = 0;

	var addBorderDots = function(index) {
		teamDots.removeClass('team-dots-active');
		teamDots.eq(index).addClass('team-dots-active');
	}

	var translateImage = function() {
		var pxNumber = $(this).attr("data-team-dots");
		iteratorTeam = pxNumber;
		wrapFoto.css("marginLeft", -widthMainBox*pxNumber);
		addBorderDots(iteratorTeam);
	}

	var translateRight = function() {
		iteratorTeam++;
		if (iteratorTeam <= 6){
			wrapFoto.css("marginLeft", -widthMainBox*iteratorTeam);
			addBorderDots(iteratorTeam);
		}
		else{
			iteratorTeam = 0;
			wrapFoto.css("marginLeft", iteratorTeam);
			addBorderDots(iteratorTeam);
		}
	}

	var translateLeft = function() {
		iteratorTeam--;
		if (iteratorTeam < 0){
			iteratorTeam = 6;
			wrapFoto.css("marginLeft", -widthMainBox*iteratorTeam);
			addBorderDots(iteratorTeam);
		}
		else{
			wrapFoto.css("marginLeft", -widthMainBox*iteratorTeam);
			addBorderDots(iteratorTeam);
		}
	}

	teamDots.click(translateImage);
	arrowRight.click(translateRight);
	arrowLeft.click(translateLeft);
});