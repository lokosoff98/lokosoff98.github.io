jQuery(document).ready(function($) {
	var 
		slider = $(".contacts-slider"),
		slide = $(".contacts-slide"),
		slideAll = 0,
		arrowLeft = $(".contacts-arrow-left"),
		arrowRight = $(".contacts-arrow-right");

	var 
		widthMainBox = $("#contacts").width(),
		iteratorContacts = 0;

	slide.each(function(index, el) {
		slideAll++;
	});
	slideAll--;

	var translateRight = function() {
		iteratorContacts++;
		if (iteratorContacts <= slideAll){
			slider.css("marginLeft", -widthMainBox*iteratorContacts);
		}
		else{
			iteratorContacts = 0;
			slider.css("marginLeft", iteratorContacts);
		}
	}

	var translateLeft = function() {
		iteratorContacts--;
		if (iteratorContacts < 0){
			iteratorContacts = slideAll;
			slider.css("marginLeft", -widthMainBox*iteratorContacts);
		}
		else{
			slider.css("marginLeft", -widthMainBox*iteratorContacts);
		}
	}

	arrowRight.click(translateRight);
	arrowLeft.click(translateLeft);
});