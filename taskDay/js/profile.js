"use strict";
"profile.js";

(function() {
	var xhrUserData = new XMLHttpRequest(),
		userDataURL = "https://lokosoff98.github.io/json/userData.json";
	xhrUserData.responseType = 'json';

	xhrUserData.addEventListener("load", function() {
		var dataCollection = xhrUserData.response;

	// ---Значения ФИО---
		var profileName = Array.from(document.querySelectorAll(".profile-mainData"));

		var addValueName = function() {
			profileName[0].textContent = dataCollection[0].name;
			profileName[1].textContent = dataCollection[0].lastName;
			profileName[2].textContent = dataCollection[0].familiName;
		};

	// ---Значения даты рождения---
		var profileDataBirth = Array.from(document.querySelectorAll(".data-text"));

		var addDataBirth = function() {
			profileDataBirth[0].textContent = dataCollection[0].dataDay;
			profileDataBirth[1].textContent = dataCollection[0].dataMouth;
			profileDataBirth[2].textContent = dataCollection[0].dataYear;
		};

	// ---Значения даты рождения---
		var profileEmail = document.querySelector(".email-text");

		var addEmail = function() {
			profileEmail.textContent = dataCollection[0].email;
		};

	addValueName();
	addDataBirth();
	addEmail();

	// --------Изменение пароля----------

	var passwordOld = document.querySelector(".password-old"),
		passwordNew = document.querySelector(".password-new"),
		passwordErrorMessage = document.querySelector(".password-error"),
		passwordDoneMessage = document.querySelector(".password-done"),
		passwordNewErrorMessage = document.querySelector(".password-new-error"),
		passwords = document.querySelectorAll(".password-profil"),
		passwordBtn = document.querySelector(".btn-password");

	var validPasswordOld = function(evt) {
		evt.preventDefault();
		if (passwordOld.value != dataCollection[0].password) {
			passwordErrorMessage.style.display = "block";
			passwordDoneMessage.style.display = "none";
		}
		else{
			if (passwordNew.value.length < 5){
				passwordNewErrorMessage.style.display = "block";
				passwordErrorMessage.style.display = "none";
			}

			else{
				passwordNewErrorMessage.style.display = "none";
				passwordErrorMessage.style.display = "none";
				passwordDoneMessage.style.display = "block";

				passwords.forEach(function(elem) {
					elem.value = '';
				});

				setTimeout(function() {
					passwordDoneMessage.style.display = "none";
				}, 5000);
			}
		}
	};

	passwordBtn.addEventListener("click", validPasswordOld);

	});

	// -------Загрузка аватарки----------

	var avatarBtn = document.querySelector(".profile_foto_download_box"),
		imageBox = document.querySelector(".profile_foto"),
		FILE_TYPES = ['jpg', 'png', 'jpeg', 'gif'],
		avatarFile = document.querySelector(".avatar_file");

	var changeAvatarFile = function() {
		var file = avatarFile.files[0];
		var fileTrue = FILE_TYPES.some(function(item) {
			return file.name.toLowerCase().endsWith(item);
		});

		if (fileTrue) {
			var reader = new FileReader();
			reader.addEventListener("load", function(evt) {
				imageBox.src = evt.target.result;
			});
			reader.readAsDataURL(file);
		}
	};

	avatarBtn.addEventListener("click", function() {
		avatarFile.click();
		avatarFile.addEventListener("change", changeAvatarFile);
	});



	//-------- Редактор данных------------

	var nameValueBox = document.querySelectorAll(".data-content"),
		nameInputBox = document.querySelectorAll(".data-input-box");

	var removeInputOpacity = function() {
		nameInputBox.forEach(function(element, index) {
			element.classList.remove("opacity-active");
		});
	};

	var activeTextNameInput = function(evt) {
		removeInputOpacity();

		evt.target.parentNode.querySelector(".data-input-box").classList.add("opacity-active");
		console.log(evt.target.parentNode.querySelector(".data-input-box"));

		var evtInput = evt.target.parentNode.querySelector(".data-input-block"),
		 	evtNameValue = evt.target.parentNode.querySelector(".data-content"),
		 	evtBtn = evt.target.parentNode.querySelector(".data-svg-btn");

		 evtInput.value = evtNameValue.textContent;

		evtInput.focus();

		var sendValueInput = function() {
			if (evtInput.value != "") {
				nameInputBox.forEach(function(element, index) {
					element.classList.remove("input-error");
				});

				evtNameValue.textContent = evtInput.value;
				evtBtn.removeEventListener("click", sendValueInput);
				removeInputOpacity();
			}
			else {
				evt.target.parentNode.querySelector(".data-input-box").classList.add("input-error");
			}
		}

		evtBtn.addEventListener("click", sendValueInput);
	};

	nameValueBox.forEach(function(element) {
		element.addEventListener("click", activeTextNameInput);
	});


	xhrUserData.open("GET", userDataURL);
	xhrUserData.send();
})();