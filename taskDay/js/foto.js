"use strict";
"foto.js";

(function() {
	var imgItem = document.querySelectorAll(".img");

	var changeImgHeight = function() {
		imgItem.forEach(function(elem) {
			elem.parentNode.style.maxHeight = elem.width + "px";
		});
	};

	var scaleImgHeight = function() {
		imgItem.forEach(function(elem) {
			elem
		});
	};

	changeImgHeight();
})();