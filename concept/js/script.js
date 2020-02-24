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
		$(this).addClass('cosmo-btn-active');

		prisesBox.removeClass('prises-a');
		prisesBox.eq(0).addClass('prises-a');
	}

	var showTwoCosmo = function() {
		$(".cosmo-2").addClass('cosmo-active');
		$(".cosmo-1").removeClass('cosmo-active');

		$(".cosmo-btn").removeClass('cosmo-btn-active');
		$(this).addClass('cosmo-btn-active');

		prisesBox.removeClass('prises-a');
		prisesBox.eq(1).addClass('prises-a');
	}

	cosmoOne.click(showOneCosmo);
	cosmoTwo.click(showTwoCosmo);

	// popup
	var 
		popupElem = $(".popup-wrap"),
		popupClous = $(".clous-popup"),
		popupBtn = $(".btn-offer");

	var togglePopup = function() {
		popupElem.toggleClass('popup-active');
	}

	popupBtn.click(togglePopup);
	popupClous.click(togglePopup);
});