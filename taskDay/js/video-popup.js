'use strict';
'video-popup.js';

(function() {
	var video_popup = document.querySelector(".video_box"),
		video_popup_clous = document.querySelector(".video_popup_clous"),
		play_box = document.querySelector(".play_box"),
		video_block = document.querySelector(".video_block");

	var videoShow = function() {
		video_popup.classList.add("video_box_active");
		video_block.classList.add("video_iframe_active");
	};

	var videoHidden = function() {
		video_popup.classList.remove("video_box_active");
		video_block.classList.remove("video_iframe_active");
	};

	play_box.addEventListener("click", videoShow);
	video_popup_clous.addEventListener("click", videoHidden);
})();