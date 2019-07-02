"use strict";
"main.js";

(function() {
	var menu = document.querySelector("#menu"),
		menuWrap = document.querySelector("#menu-wrap"),
		mainSection = document.querySelector("#main"),
		i,
		logo_box = document.querySelector(".logo_box"),
		menu_item = document.querySelectorAll(".menu_item"),
		description = document.querySelector(".description"),
		menu_item_text = document.querySelectorAll(".menu_item_text"),
		menu_ico = document.querySelectorAll(".menu_ico"),
		burger = document.querySelector(".burger_block");

	var onBurgerActive = function() {
		burger.classList.add("burger_active");

		menu.style.width = 70 + "px";
		menuWrap.style.width = menu.style.width;
		mainSection.style.width = (window.innerWidth - 100) + "px";
		logo_box.classList.add("logo_box_burger");
		description.classList.add("noneDisplay");

		menu_item.forEach(function(item) {
			item.classList.add("menu_item_burger");
		});

		menu_item_text.forEach(function(item) {
			item.classList.add("menu_item_text_burger");
		});

		menu_ico.forEach(function(item) {
			item.classList.add("menu_ico_burger");
		});
	};

	var onBurgerRemove = function() {
		burger.classList.remove("burger_active");

		menu.style.width = 17 + "%";
		menuWrap.style.width = menu.style.width;
		mainSection.style.width = 83 + "%";
		logo_box.classList.remove("logo_box_burger");
		description.classList.remove("noneDisplay");

		menu_item.forEach(function(item) {
			item.classList.remove("menu_item_burger");
		});

		menu_item_text.forEach(function(item) {
			item.classList.remove("menu_item_text_burger");
		});

		menu_ico.forEach(function(item) {
			item.classList.remove("menu_ico_burger");
		});
	};

	burger.addEventListener("click", function() {
		if (!burger.classList.contains('burger_active')){
			onBurgerActive();
		} else{
			onBurgerRemove();
		}
	});	
})();