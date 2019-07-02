"use strict"; 
"log.js";

(function() {
	var btn = document.querySelector(".btn_form"),
		userName = document.querySelector(".inpName"),
		userEmail = document.querySelector(".inpEmail"),
		icoName = document.querySelector(".inp_name_ico"),
		icoEmail = document.querySelector(".inp_email_ico"),
		errorName = document.querySelector(".inp_valid_name"),
		errorEmail = document.querySelector(".inp_valid_email");

	var xhrUserData = new XMLHttpRequest(),
		userDataURL = "https://lokosoff98.github.io/json/userData.json";
	xhrUserData.responseType = 'json';

	xhrUserData.addEventListener("load", function() {
		var userCollection = xhrUserData.response;
		
		var submitBtn = function(evt) {
			errorName.textContent = "";
			errorEmail.textContent = "";
			icoName.style.fill = "#737373";
			icoEmail.style.fill = "#737373";

			if (userName.value != userCollection[0].name){
				evt.preventDefault();
				icoName.style.fill = "#fd4343";
				errorName.textContent = "Такого имени пользователя не существует."
			} else if (userEmail.value != userCollection[0].email){
				evt.preventDefault();
				icoEmail.style.fill = "#fd4343";
				errorEmail.textContent = "Такого email пользователя не существует."
			}
			else {
				evt.preventDefault();
				window.location.href = document.querySelector(".link-in-main").href;
			}
		}

		btn.addEventListener("click", submitBtn);
	});

	xhrUserData.open("GET", userDataURL);
	xhrUserData.send();
})();