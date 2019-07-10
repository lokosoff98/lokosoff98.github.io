"use strict";

(function() {
	// ---------Слайдер на главном экране--------------

	var 
		i,
		offerBlock = document.querySelector(".offer-block"),
		iterator = 0,
		imgSlide = document.querySelectorAll(".offer-slider-bg"),
		slide = document.querySelectorAll(".offer-slide-box");

	var 
		both = document.querySelectorAll(".slider-both");

	var showSlideBlock = function(index) {
		for (i = 0; i < slide.length; i++){
			both[i].classList.remove("slider-both-active");
			slide[i].classList.remove('offer-slide-box-active');
			imgSlide[i].classList.remove('offer-slider-bg-active');
		}

		both[index].classList.add("slider-both-active");
		slide[index].classList.add('offer-slide-box-active');
		imgSlide[index].classList.add('offer-slider-bg-active');

		iterator = index + 1;

		if (iterator >= slide.length){
			iterator = 0;
		}

		// ------Расчёт высоты активного блока----------

		var 
			offerSlide = offerBlock.querySelector(".offer-slide-box-active");

		var instalHeightOfferBlock = function() {
			offerBlock.style.height = offerSlide.clientHeight + offerSlide.offsetTop + "px";
		};

		instalHeightOfferBlock();
	};

	showSlideBlock(0);

	// ----------Слайдер главного экрана--------
	var iteratorSlide = setInterval(function() {
		showSlideBlock(iterator);
	}, 10000);


	Array.from(both).forEach( function(element, index) {
		element.addEventListener("click", function() {
			clearInterval(iteratorSlide);
			iteratorSlide = setInterval(function() {
				showSlideBlock(iterator);
			}, 10000);

			iterator = index;
			showSlideBlock(index);
		});
	});

	//-------- Мобильное меню--------------

	var 
		burger = document.querySelector(".burger-box"),
		menu = document.querySelector("#menu"),
		menuClous = menu.querySelector(".menu-clous");

	var showMenu = function() {
		menu.classList.add("menu-active");
	}

	var hideMenu = function() {
		menu.classList.remove("menu-active");
	}

	burger.addEventListener("click", showMenu);
	menuClous.addEventListener("click", hideMenu);
})();