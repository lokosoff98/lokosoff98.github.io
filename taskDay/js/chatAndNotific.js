"use strict";
"Chat and notification";

(function() {
// ------Отправка сообщений в чат--------
	var chatTextValue = document.querySelector("#chatText"),
		chatBox = document.querySelector(".chatPopup_chat_box"),
		chatBtnSend = document.querySelector(".send_btn");

	// Количество непрочитанных сообщений в чате от админа

	var addAudioMessage = function(srcLink) {
		var audio = new Audio();
		audio.src = srcLink;
		audio.play();
	}

	var notReadNumber = document.querySelector(".chat_number");

	var addNumberNotRead = function() {
		var arrNumber = chatBox.querySelectorAll(".support-message-box_notRead");
		var number = Array.from(arrNumber).length;
		
		if (number != 0){
			notReadNumber.style.display = "block";
			notReadNumber.textContent = number;
		} else {
			notReadNumber.style.display = "none";
		}
	};

	addNumberNotRead();

	// Сообщения от админа

	var chatAdminMessageTemplate = document.querySelector("#anminMessage").content.querySelector(".support-message-box");

	var addAdminMessage = function() {
		setTimeout(function(){
			var elem = chatAdminMessageTemplate.cloneNode(true);
			elem.querySelector(".support-message-text").textContent = "Здравствуйте! Задавайте Ваши вопросы в этот чат.";
			chatBox.appendChild(elem);
			addNumberNotRead();
			addAudioMessage(document.querySelector("#admin-message-audio").src);
		}, 5000);
	};


	var readAdminMessage = function() {
		var items = document.querySelectorAll(".support-message-box_notRead");
		if (items){
			items.forEach(function(element, index) {
				setTimeout(function() {
					element.classList.remove("support-message-box_notRead");
					addNumberNotRead();
				}, 1000);
			});
		}
	};

	chatTextValue.addEventListener("click", readAdminMessage);

	addAdminMessage();

	// Сообщения от пользователя

	var ChatMessage = function() {
		if (chatTextValue.value != ""){
			var elem = document.querySelector("#chatTemplate").content.querySelector(".chat-message-box").cloneNode(true);

			elem.querySelector(".chat-message-text").textContent = chatTextValue.value;
			chatTextValue.value = "";
			chatBox.appendChild(elem);
			addAudioMessage(document.querySelector("#send-message-audio").src);
		}
	};

	var onMessageSend = function(evt) {
		if (evt.keyCode === 13){
			evt.preventDefault();
			ChatMessage();
		}
	};

	chatBtnSend.addEventListener("click", ChatMessage);

// --------Закрытие, открытие чата-----------

	var chatOpen = document.querySelector(".chat_box"),
		chatWrap = document.querySelector(".chat_popup"),
		chatBlock = document.querySelector(".chatPopup_box"),
		chatClous = document.querySelector(".chatPopup_clous");

	var onChatOpen = function() {
		readAdminMessage();

		chatWrap.classList.add('chat_popup_active');
		chatBlock.classList.add('chatPopup_box_active');
		document.addEventListener("keydown", onMessageSend);
	}

	var onChatHide = function() {
		chatWrap.classList.remove('chat_popup_active');
		chatBlock.classList.remove('chatPopup_box_active');

		document.removeEventListener("keydown", onMessageSend);
	}

	chatOpen.addEventListener("click", onChatOpen);
	chatClous.addEventListener("click", onChatHide);




// -----------Оповещания----------------

	var colokol = document.querySelector(".colokol_icon"),
		notific_box = document.querySelector(".notific_box");

	var onNotificShow = function() {
		notific_box.classList.toggle("notific_box_active");
	};

	colokol.addEventListener("click", onNotificShow);

	// ---Выводим оповещания ---

	var notificXhr = new XMLHttpRequest(), 
		notificURL = "https://lokosoff98.github.io/json/notoficMessage.json";
		notificXhr.responseType = "json";

		notificXhr.addEventListener("load", function() {
			var notificBlocks = notificXhr.response;

			var notificTemplate = document.querySelector("#notificTemplate").content.querySelector(".notific_block"),
				notificBox = document.querySelector(".notific_box");

			var notificArrNew = [];

			var addNotificBlock = function() {
				notificBlocks.forEach(function(element, index) {
					if (element.new) {
						notificArrNew.push(element);
						var elem = notificTemplate.cloneNode(true);
						elem.querySelector(".notific-heading").textContent = element.heading;
						elem.querySelector(".notific-text").textContent = element.text;
						elem.querySelector(".notific-link").href = element.link;

						notific_box.appendChild(elem);
					}
				});
			};

			addNotificBlock();


			// --Число новых оповещаний---
			var colokolNumber = document.querySelector(".colokol_number");

			var addNumberNotific = function() {
				if (notificArrNew.length == 0){
					colokolNumber.style.display = "none";
				} else{
					colokolNumber.style.display = "block";
					colokolNumber.textContent = notificArrNew.length;
				}
			};

			addNumberNotific();

			// ---Удаление оповещаний---

			var onNotificHide = function(elem) {
				var items = Array.from(notificBox.children);
				items.forEach(function(element, index) {
					if (element == elem){
						notificArrNew.splice(index, 1);
						addNumberNotific();
					}
				});
				notificBox.removeChild(elem);
			};

			var AddTargetNotificClous = function() {
				for (var i = 0; i < notificArrNew.length; i++){
					document.querySelectorAll(".notific_block")[i].addEventListener("click", function(evt) {
						if (evt.target && evt.target.classList.contains("notific-block-clous")) {
							onNotificHide(evt.currentTarget);
						}
					});
				}
			};

			AddTargetNotificClous();
		});

		notificXhr.open("GET", notificURL);
		notificXhr.send();

// --------------Профиль меню---------------

	var profilBtn = document.querySelector(".avatar_name"),
		profil = document.querySelector(".profil-menu-box");

	var onProfileActive = function() {
		profil.classList.toggle("profil-active");
	};

	profilBtn.addEventListener("click", onProfileActive);

})();