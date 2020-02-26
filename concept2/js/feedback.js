jQuery(document).ready(function($) {
	$(".feedback-slide").each(function(index, el) {
		$(".feedback-slide-block").eq(index).twentytwenty();
	});

	var 
		slider = $(".feedback-slider"),
		arrowLeft = $(".feedback-arrow-left"),
		arrowRight = $(".feedback-arrow-right");

	var 
		widthMainBox = $(".feedback-slider-wrap").width(),
		iteratorFeedback = 0;

	var fadeFeedbackContent = function(number) {
		$(".feedback-content-block").removeClass('f-content-a');
		$(".feedback-content-block").eq(number).addClass('f-content-a');
	}

	var translateRight = function() {
		iteratorFeedback++;
		if (iteratorFeedback <= 2){
			fadeFeedbackContent(iteratorFeedback);
			slider.css("marginLeft", -widthMainBox*iteratorFeedback);
		}
		else{
			iteratorFeedback = 0;
			fadeFeedbackContent(iteratorFeedback);
			slider.css("marginLeft", iteratorFeedback);
		}
	}

	var translateLeft = function() {
		iteratorFeedback--;
		fadeFeedbackContent(iteratorFeedback);
		if (iteratorFeedback < 0){
			iteratorFeedback = 2;
			fadeFeedbackContent(iteratorFeedback);
			slider.css("marginLeft", -widthMainBox*iteratorFeedback);
		}
		else{
			slider.css("marginLeft", -widthMainBox*iteratorFeedback);
			fadeFeedbackContent(iteratorFeedback);
		}
	}

	arrowRight.click(translateRight);
	arrowLeft.click(translateLeft);
});