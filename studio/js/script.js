jQuery(document).ready(function($) {
	var burger = $('.burger'),
		menu_box = $('.menu_box'),
		burger_clous_box = $('.burger_clous_box'),
		menu_icons = $('.menu_icons'),
		menu_name = $('.menu_name');

	burger.click(menu);
	burger_clous_box.click(menu);

	function menu() {
		menu_box_click();
	}

	function menu_box_click() {
		menu_box.toggleClass('menu_box_active');
		menu_icons.toggleClass('menu_icons_active');
		menu_name.toggleClass('menu_name_active');
		$('body').toggleClass('body_hidden');
	}


	// -----------popup---------------

	var clous = $('.clous'),
		main_btn = $('.popup_btn_a'),
		clous_popup = $('.clous_popup');

	main_btn.click(clous_show);
	clous_popup.click(clous_hide);

	function clous_show() {
		clous.addClass('clous_active');
	}

	function clous_hide() {
		clous.removeClass('clous_active');
	}


	// ------Аккордион на странице "О студии"---------

	var accord_tab = $('.accord_tab'),
	    accClick,accordBlock,
		accord_content_box = $('.accord_content_box');

	accord_tab.on('click', tab_show);

	function tab_show() {
		tab_hide();
		$(this).addClass('accord_tab_active');
		accordBlock = $(this).attr("data-tab");
		$('.accord_content_box[data-accord='+accordBlock+']').addClass('accord_content_box_active');
	}

	function tab_hide() {
		accord_tab.removeClass('accord_tab_active');
		accord_content_box.removeClass('accord_content_box_active');
	}



	// ----------Аккордион портфолио---------
	var portf_tab = $('.portf_tab'),
	    port_box = $('.port_box'),
		port_block;

	port_block_active();

	portf_tab.on("click", port_block_show);

	$('.portf_tab_all').click(port_block_active);

	function port_block_show() {
		port_block_hide();
		$(this).addClass('portf_tab_active');
		port_block = $(this).attr("data-tabport");
		$('.port_block[data-port='+port_block+']').addClass('port_block_active');
	}

	function port_block_hide() {
		portf_tab.removeClass('portf_tab_active');
		port_box.children('.port_block').removeClass('port_block_active')
	}

	function port_block_active() {
		$(this).addClass('portf_tab_active');
		port_box.children('.port_block').addClass('port_block_active');
	}

	// -----Всплывающие дизайны----

	var blok_design = $(".port_block"),
		design = $('.design'), src_attr,
		popup_design_clous = $('.popup_design_clous');

	blok_design.click(design_show);
	popup_design_clous.click(design_clous);

	function design_show() {
		$('body').css('overflow-y', 'hidden');
		src_attr = 'img/design-'+$(this).attr('data-image')+'.jpg';
		design.attr('src', src_attr);
		$('.popup_design').addClass('popup_design_active');
	}

	function design_clous() {
		$('body').css('overflow-y', 'auto');
		$('.popup_design').removeClass('popup_design_active');
		design.attr('src', '');
	} 

});