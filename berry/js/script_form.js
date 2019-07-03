jQuery(document).ready(function($) {
// ------Увеличение %---------

var load_text = $(".load_text"),
	load_text_number = 0;

var load_text_set = setInterval(load_text_animation, 4000/85);

function load_text_animation() {
	if (load_text_number > 75){
		clearInterval(load_text_set);
	}
	else{
		load_text.text(load_text_number+'%');
		load_text_number++;
	}
}

// -----------politic--------------

var form1_politic_block = $(".form1_politic_block"),
	form1_politic_check = $(".form1_politic_check");
	
politic();

form1_politic_block.click(politic);

function politic() {
	form1_politic_check.toggleClass('form1_politic_check_active');
}

// -------------Для Анкеты--------
var anketa_geo_block = $(".anketa_geo_block"),
	geo_anketa = $("input[type='checkbox']");

anketa_geo_block.click(anketa_check);

function anketa_check() {
	var this_elem = $(this).attr('data-geo');
	for (var i = 0; i < geo_anketa.length; i++){
		if (geo_anketa.eq(i).attr('data-anketa') == this_elem){
			input_check_anketa(i);
		}
	}
}

function input_check_anketa(a) {
	if (!geo_anketa.eq(a).is(':checked')){
		geo_anketa.eq(a).prop("checked", true);
		$('.anketa_geo_check').eq(a).addClass('anketa_geo_check_active');
	}
	else{
		geo_anketa.eq(a).prop("checked", false);
		$('.anketa_geo_check').eq(a).removeClass('anketa_geo_check_active');
	}
	
}


});