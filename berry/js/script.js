jQuery(document).ready(function($) {
	// ----------------Слайдер------------

	$('.berry_slider_block').slick({
	  prevArrow: $(".slider_arrow_left"),
	  nextArrow: $(".slider_arrow_right"),
	  autoplay: true, 
	  autoplaySpeed: 3000,
	  speed: 1000
	});

	// -------------Для формы 1--------
	var form1_geo_block = $(".form1_geo_block"),
		geo_form1 = $("input[name='geo_form1']");

	input_check(0);
	

	form1_geo_block.click(form1_check);

	function form1_check() {
		var this_elem = $(this).attr('data-geo');
		for (var i = 0; i < geo_form1.length; i++){
			if (geo_form1.eq(i).attr('value') == this_elem){
				input_check(i);
			}
		}
	}

	function input_check(a) {	
		geo_form1.eq(a).prop("checked", true);
		$('.form1_geo_check').removeClass('form1_geo_check_active');
		$('.form1_geo_check').eq(a).addClass('form1_geo_check_active');
	}

	// -------------Для формы попапа--------
	var popup_form_geo_block = $(".popup_form_geo_block"),
		geo_popup_form = $("input[name='geo_popup_form']");

	input_check_popup(0);
	
	popup_form_geo_block.click(popup_form_check);

	function popup_form_check() {
		var this_elem = $(this).attr('data-geo');
		for (i = 0; i < geo_popup_form.length; i++){
			if (geo_popup_form.eq(i).attr('value') == this_elem){
				input_check_popup(i);
			}
		}
	}

	function input_check_popup(a) {	
		geo_popup_form.eq(a).prop("checked", true);
		$('.popup_form_geo_check').removeClass('popup_form_geo_check_active');
		$('.popup_form_geo_check').eq(a).addClass('popup_form_geo_check_active');
	}

	// -----------politic--------------

	var form1_politic_block = $(".form1_politic_block"),
		form1_politic_check = $(".form1_politic_check");
		
	politic();

	form1_politic_block.click(politic);

	function politic() {
		form1_politic_check.toggleClass('form1_politic_check_active');
	}


	// ---------------popup_form----------------

	var btn_offer = $(".btn_offer"),
		feedback_btn = $(".feedback_btn"),
		prise_btn = $(".prise_btn"),
		popup_form_box = $(".popup_form_box"),
		popup_form_block = $(".popup_form_block"),
		popup_form_clous = $(".popup_form_clous");

	btn_offer.click(popup_show);
	feedback_btn.click(popup_show);
	prise_btn.click(popup_show);

	popup_form_clous.click(popup_hide);

	function popup_show() {
		$("body").css("overflow", "hidden");
		popup_form_box.addClass("popup_form_box_active");
		popup_form_block.addClass("popup_form_block_active");
	}

	function popup_hide() {
		$("body").css("overflowY", "auto");
		popup_form_box.removeClass("popup_form_box_active");
		popup_form_block.removeClass("popup_form_block_active");
	}	
});