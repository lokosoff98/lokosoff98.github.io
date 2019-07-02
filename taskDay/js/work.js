"use strict";
"work.js";

(function() {
	var dateDayPopup = document.querySelector("#popup-data-day"),
		dateMonthPopup = document.querySelector("#popup-data-month");

	var addNumberInDay = function() {
		for (var d = 2; d <= 31; d++){
			var elem = dateDayPopup.children[0].cloneNode(true);
			if (d <= 9){
				elem.textContent = "0" + d;
				elem.value = "0" + d;
				dateDayPopup.appendChild(elem);
			}
			else if (d > 9) {
				var elem = dateDayPopup.children[0].cloneNode(true);
				elem.textContent = d;
				elem.value = d;
				dateDayPopup.appendChild(elem);
			}
		}
	}

	var addNumberInMonth = function() {
		for (var d = 2; d <= 12; d++){
			var elem = dateMonthPopup.children[0].cloneNode(true);
			if (d <= 9){
				elem.textContent = "0" + d;
				elem.value = "0" + d;
				dateMonthPopup.appendChild(elem);
			}
			else if (d > 9) {
				var elem = dateMonthPopup.children[0].cloneNode(true);
				elem.textContent = d;
				elem.value = d;
				dateMonthPopup.appendChild(elem);
			}
		}
	}

	addNumberInDay();
	addNumberInMonth();


	var btn = document.querySelector(".btn-offer"),
		popup = document.querySelector(".popup-wrap"),
		popupClose = document.querySelector(".popup-close"),
		popup_box = document.querySelector(".popup_box");

	var showPopup = function() {
		document.body.style.overflowY = 'hidden';
		popup.classList.add("popup-active");
		popup_box.classList.add("popup_box_active");
	};

	var hidePopup = function() {
		document.body.style.overflowY = 'auto';
		popup.classList.remove("popup-active");
		popup_box.classList.remove("popup_box_active");
	};

	btn.addEventListener("click", showPopup);
	popupClose.addEventListener("click", hidePopup);

// ---------Данные для графика-------------

var works = [	
	{
		name: "Купить баскетбольный мяч за 1900 руб.",
		text: "У сына др. Адрес магазина ул Ленина 7",
		attention: false,
		data: "01.07.2019",
		done: false,
	},

	{
		name: "Купить баскетбольный мяч за 1900 руб.",
		text: "У сына др. Адрес магазина ул Ленина 7",
		attention: true,
		data: "05.07.2019",
		done: false,
	},

	{
		name: "Купить баскетбольный мяч за 1900 руб.",
		text: "У сына др. Адрес магазина ул Ленина 7",
		attention: false,
		data: "02.07.2019",
		done: true,
	},
	{
		name: "Зайти в магазин за перчатками.",
		text: "ул Ленина 56 красное здание.",
		attention: true,
		data: "01.06.2019",
		done: false,
	},
];

// ------График выполнения задач------

	var canvas = document.querySelector("#canvas"),
		canvasBox = document.querySelector(".canvas-box"),
		ctx = canvas.getContext("2d");

	canvas.height = canvasBox.clientHeight;
	canvas.width = canvasBox.clientWidth;

	var addbaseLine = function () {
		// Ось х
		ctx.beginPath();
		ctx.moveTo(30, canvas.height);
		ctx.lineTo(canvas.width, canvas.height);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#000";
		ctx.stroke();
		ctx.closePath();

		// Ось Y

		ctx.beginPath();
		ctx.moveTo(30, 0);
		ctx.lineTo(30, canvas.height);
		ctx.lineWidth = 1;
		ctx.strokeStyle = "#000";
		ctx.stroke();
		ctx.closePath();
	}

	var addTextY = function() {
		// 50%
		ctx.textBaseLine = "heading";
		ctx.fillStyle = "#000";
		ctx.font = "12px PT Sans";
		ctx.fillText("50%", 0, canvas.height / 2);

		// 100%
		ctx.textBaseLine = "heading";
		ctx.fillStyle = "#000";
		ctx.font = "12px PT Sans";
		ctx.fillText("100%", 0, 10);
	};

	var addChart = function() {
		var oneHeight = 0, 
			twoHeight = 0;

		works.forEach(function(item) {
			if (item.done) {
				oneHeight++
			} 
			else {
				twoHeight++
			}
		});
		// Выполнены
		ctx.clearRect(70, canvas.height - 1, 70, -canvas.height);
		ctx.fillStyle = "#8bc2a1";
		ctx.fillRect(70, canvas.height - 1, 70, -(canvas.height/(oneHeight+twoHeight)*oneHeight) );

		// Ждут выполнения
		ctx.clearRect(210, canvas.height - 1, 70, -canvas.height);
		ctx.fillStyle = "#f0c0b5";
		ctx.fillRect(210, canvas.height - 1, 70, -(canvas.height/(oneHeight+twoHeight)*twoHeight) );
	};

	addbaseLine();
	addTextY();
	addChart();

// ----------Шаблоны задач-------------
	var workBox = document.querySelector(".work-box"),
		workTemplate = document.querySelector("#work-template").content.querySelector(".work-block");

	// Удаление задачи
	var clousWork = function(evt) {
		var workBoxArray = Array.from(workBox.children);
		workBoxArray.forEach(function(workItem, index) {
			if (workItem == evt.currentTarget.parentNode) {
				works.splice(index, 1);
				workBox.removeChild(evt.currentTarget.parentNode);
				addChart();
			}
		});
	};

	// -------Добавление/удаление важных задач----------
	var addAttentionWork = function(evt) {
		var evtBlock = evt.currentTarget.parentNode;
		if (!evtBlock.classList.contains("work-block-done")) {
			if (evtBlock.classList.contains("work-block-redAttantion")) {
				evtBlock.classList.remove("work-block-redAttantion");
				evtBlock.querySelector(".work-attantion-text").textContent = "Добавить в важное";

				Array.from(workBox.children).forEach(function(item, index) {
					if (item == evtBlock){
						works[index].attention = false;
					}
				});
			}
			else {
				evtBlock.classList.add("work-block-redAttantion");
				evtBlock.querySelector(".work-attantion-text").textContent = "Убрать из важных";

				Array.from(workBox.children).forEach(function(item, index) {
					if (item == evtBlock){
						works[index].attention = true;
					}
				});
			}
		}
	};

	// ------Добавление выполненых задач--------
	var addDoneWork = function(evt) {
		if (confirm("Вы действительно выполнили задачу?")){
			var evtBlock = evt.target.parentNode.parentNode;
			evtBlock.classList.add("work-block-done");
			evtBlock.querySelector(".work-btn-box").style.display = "none";
			evtBlock.querySelector(".work-attantion-text").textContent = "Выполнено!";
			evtBlock.querySelector(".work-attantion-img").src = "img/work-done.svg";

			Array.from(workBox.children).forEach(function(item, index) {
				if (item == evtBlock){
					works[index].done = true;
				}
			});

			addChart();
		}

		else{
			alert("Нажмите кнопку 'Выполнить', когда действительно завершите её выполнение");
		}
	};


	var addWorkFromServer = function() {
		works.forEach(function(item) {
			var elem = workTemplate.cloneNode(true);
			elem.querySelector(".work-heading").textContent = item.name;
			elem.querySelector(".work-text").textContent = item.text;
			elem.querySelector(".work-data-value").textContent = item.data;

			elem.querySelector(".work-clous").addEventListener("click", clousWork);
			elem.querySelector(".work-attantion-box").addEventListener("click", addAttentionWork);
			elem.querySelector(".work-btn").addEventListener("click", addDoneWork);

			if (item.attention) {
				elem.classList.add("work-block-redAttantion");
				elem.querySelector(".work-attantion-text").textContent = "Убрать из важных"
			}

			if(item.done){
				elem.classList.remove("work-block-redAttantion");
				elem.classList.add("work-block-done");
				elem.querySelector(".work-attantion-img").src = "img/work-done.svg";
				elem.querySelector(".work-attantion-text").textContent = "Выполнено!";
				elem.querySelector(".work-btn-box").style.display = "none";
			}

			workBox.appendChild(elem);
		});
	};

	addWorkFromServer();

// --------Добавляем задачи------

	var popupBlock = document.querySelector(".popup_box"),
		popupName = popupBlock.querySelector(".name-inp"),
		popupAttantion = popupBlock.querySelector(".popup-attention"),
		popupDay = popupBlock.querySelector("#popup-data-day"),
		popupMonth = popupBlock.querySelector("#popup-data-month"),
		popupYear = popupBlock.querySelector("#popup-data-year"),
		popupText = popupBlock.querySelector(".popup-textWork"),
		btnPopup = popupBlock.querySelector(".btn-popup");

	var addWorkInlist = function() {
		var worksElem = {
			name: popupName.value,
			text: popupText.value,
			attention: popupAttantion.checked,
			data: popupDay.value + "." + popupMonth.value + "." + popupYear.value,
			done: false
		};

		works.push(worksElem);

		var element = workTemplate.cloneNode(true);
		element.querySelector(".work-heading").textContent = worksElem.name;
		element.querySelector(".work-text").textContent = worksElem.text;
		element.querySelector(".work-data-value").textContent = worksElem.data;

		element.querySelector(".work-clous").addEventListener("click", clousWork);
		element.querySelector(".work-attantion-box").addEventListener("click", addAttentionWork);
		element.querySelector(".work-btn").addEventListener("click", addDoneWork);

		if (worksElem.attention) {
			element.classList.add("work-block-redAttantion");
			element.querySelector(".work-attantion-text").textContent = "Убрать из важных";
		}

		hidePopup();
		workBox.appendChild(element);

		addChart();
	};

	btnPopup.addEventListener("click", addWorkInlist);


// ---------Фильтры-----------------
	var timeValue = new Date();

	var filterDate = document.querySelector("#filter-data");

	var hiddenFilterBlocks = function() {
		for (var iterator = 0; iterator < workBox.children.length; iterator++){
			workBox.children[iterator].classList.add("work-block-filter");
		}
	};

	var visibleFilterBlocks = function(blockIndex) {
		workBox.children[blockIndex].classList.remove("work-block-filter");
	};

// Фильтр сегодня
	var filterToday = function(elem, i) {
		(elem.data.split(".")).forEach(function(day, dayIndex) {
			if (dayIndex == 0 && day == timeValue.getDay()){
				visibleFilterBlocks(i)
			}
		});
	};

// Фильтр завтра
	var filterTomorrow = function(elem, i) {
		(elem.data.split(".")).forEach(function(day, dayIndex) {
			if (dayIndex == 0 && day == timeValue.getDay()+1){
				visibleFilterBlocks(i)
			}
		});
	};

// Фильтр неделя
	var filterWeek = function(elem, i) {
		(elem.data.split(".")).forEach(function(day, dayIndex) {
			if (dayIndex == 0 && timeValue.getDay() <= +day && +day <= timeValue.getDay()+7){
				console.log(+day);
				visibleFilterBlocks(i)
			}
		});
	};

	var activeFilterData = function(changeValue) {
		hiddenFilterBlocks();
		works.forEach(function(item, i) {
			(item.data.split(".")).forEach(function(elem, index) {
				if (changeValue == "today"){
					if (index == 1 && elem == timeValue.getMonth()+1){
						filterToday(item, i);
					}
				}

				else if (changeValue == "tomorrow"){
					if (index == 1 && elem == timeValue.getMonth()+1){
						filterTomorrow(item, i);
					}
				}

				else if (changeValue == "week") {
					if (index == 1 && elem == timeValue.getMonth()+1){
						filterWeek(item, i);
					}
				}

				else if (changeValue == "month") {
					if (index == 1 && elem == timeValue.getMonth()+1){
						visibleFilterBlocks(i);
					}
				}

				else if (changeValue == "allTime") {
					visibleFilterBlocks(i);
				}
				
			});
		});
	};

	var changeFilterDate = function() {
		Array.from(filterDate.children).forEach(function(elem) {
			if (elem.selected) {
				activeFilterData(elem.value);
			}
		});
	};


//----------- Фильтры по важности-----------------

var filterAttention = document.querySelector("#filter-attention");

var activeFilterAttention = function() {
	Array.from(filterAttention).forEach(function(elem) {
		if (elem.selected && elem.value == "all") {
			Array.from(workBox.children).forEach(function(elem, index) {
				if (!elem.classList.contains('work-block-filter')){
					elem.classList.remove("work-block-filter");
				}
			});
		}

		else if (elem.selected && elem.value == "attention") {
			Array.from(workBox.children).forEach(function(elem, index) {
				if (!elem.classList.contains('work-block-filter') && elem.classList.contains('work-block-redAttantion')) {
					elem.classList.remove("work-block-filter");
				}
				else {
					elem.classList.add("work-block-filter");
				}
			});
		}

		else if (elem.selected && elem.value == "notAttention") {
			Array.from(workBox.children).forEach(function(elem, index) {
				if (!elem.classList.contains('work-block-filter') && !elem.classList.contains('work-block-redAttantion')) {
					elem.classList.remove("work-block-filter");
				}
				else {
					elem.classList.add("work-block-filter");
				}
			});
		}
	});
};

var btnFilter = document.querySelector(".btn-filter");

var clickBtnFilter = function() {
	changeFilterDate();
	activeFilterAttention();
};

btnFilter.addEventListener("click", clickBtnFilter);

})();