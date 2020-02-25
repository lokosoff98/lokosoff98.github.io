jQuery(document).ready(function($) {
	$("#phone-form").inputmask("+7 (999) 999-9999"); 
	// Переключение космо
	var 
		cosmoOne = $(".cosmo-btn-1"),
		cosmoTwo = $(".cosmo-btn-2"),
		prisesBox = $(".prises");

	var showOneCosmo = function() {
		$(".cosmo-1").addClass('cosmo-active');
		$(".cosmo-2").removeClass('cosmo-active');

		$(".cosmo-btn").removeClass('cosmo-btn-active');
		$(".cosmo-btn-1").addClass('cosmo-btn-active');

		prisesBox.removeClass('prises-a');
		prisesBox.eq(0).addClass('prises-a');
	}

	var showTwoCosmo = function() {
		$(".cosmo-2").addClass('cosmo-active');
		$(".cosmo-1").removeClass('cosmo-active');

		$(".cosmo-btn").removeClass('cosmo-btn-active');
		$(".cosmo-btn-2").addClass('cosmo-btn-active');

		prisesBox.removeClass('prises-a');
		prisesBox.eq(1).addClass('prises-a');
	}

	cosmoOne.click(showOneCosmo);
	cosmoTwo.click(showTwoCosmo);

	// popup
	var 
		popupElem = $(".popup-wrap"),
		popupClous = $(".clous-popup"),
		popupBtn = $(".popup-callback");

	var togglePopup = function() {
		popupElem.toggleClass('popup-active');
	}

	popupBtn.click(togglePopup);
	popupClous.click(togglePopup);

	// Меню

	$(window).scroll(function(event) {
		if ( $(this).scrollTop() > 300) {
 			$("#nav").css({
 				backgroundColor: '#5C4942'
 			});
		}

		else {
			$("#nav").css({
				backgroundColor: 'transparent'
			});
		}
	});
});