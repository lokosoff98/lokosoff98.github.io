jQuery(document).ready(function($) {
	$('.feedback_slider_box').slick({
		prevArrow: $(".arrow_slider_left"),
		nextArrow: $(".arrow_slider_right"),
	});

	$(".offer_boxbtn").on("click","a", function (event) {
	    //отменяем стандартную обработку нажатия по ссылке
	    event.preventDefault();
	    //забираем идентификатор бока с атрибута href
	    var id  = $(this).attr('href'),
	    //узнаем высоту от начала страницы до блока на который ссылается якорь
	    top = $(id).offset().top;
	    //анимируем переход на расстояние - top за 1500 мс
	    $('body,html').animate({scrollTop: top}, 1000);
	});

	var callback = $("#callback"),
		callback_popup_clous = $(".callback_popup_clous"),
		callback_popup_box = $('.callback_popup_box'),
		offer_btn = $(".offer_btn"),
		cta_popup_clous = $(".cta_popup_clous"),
		prise_link = $(".prise_link"),
		cta_popup_box = $(".cta_popup_box"),
		feedback_btn = $(".feedback_btn"),
		stage_link = $(".stage_link"),
		play = $(".play"),
		video_popup_clous = $(".video_popup_clous"),
		video_container = $(".video_container"),
		video_popup_box = $(".video_popup_box");

	callback.click(callback_func);
	callback_popup_clous.click(callback_func);

	offer_btn.click(prise_cta);
	cta_popup_clous.click(prise_cta);
	prise_link.click(prise_cta);
	feedback_btn.click(prise_cta);
	stage_link.click(prise_cta);

	play.click(video_show);
	video_popup_clous.click(video_hide);



	function callback_func() {
		callback_popup_box.toggleClass('callback_popup_box_active')
	}

	function prise_cta() {
		cta_popup_box.toggleClass('cta_popup_box_active');
	}

	function video_show() {
		video_container.append('<iframe class="iframe_video" src="https://www.youtube.com/embed/20c_Kq91D2I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
		
		video_popup_box.toggleClass('video_popup_box_active');
	}

	function video_hide() {
		$("iframe").remove(".iframe_video");
		video_popup_box.toggleClass('video_popup_box_active');
	}


	//----- Вопросы--------

	var quest_block = $(".quest_block"); 

	quest_block.click(question);

	function question() {
		var t = $(this);

		if (!t.children('.quest_block_text').hasClass('quest_block_text_active')){
			$('.quest_block_text').removeClass('quest_block_text_active');

			$('.quest_ico').removeClass('quest_ico_active');
		}

		$(this).children('.quest_block_text').toggleClass('quest_block_text_active');

		$(this).children('.quest_block_main').children('.quest_ico').toggleClass('quest_ico_active');
	}
});