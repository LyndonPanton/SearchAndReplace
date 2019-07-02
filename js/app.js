"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function replace(string, before, after) {
		if (!string || !before || !after) {
			return "Input fields must not be empty";
		} else if (before.indexOf(" ") > -1) {
			return "Search field must not contain spaces";
		} else if (after.indexOf(" ") > -1) {
			return "Replace field must not contain spaces";
		} else {
			let newStr = string.split(" ");
			let index = newStr.indexOf(before);

			if (before[0].toUpperCase() === before[0]) {
				newStr[index] = after[0].toUpperCase() + after.slice(1);
			} else {
				newStr[index] = after;
			}

			return newStr.join(" ");
		}
	}

	function toggle(chevron) {
		let task = document.getElementById("task");

		if (Array.from(chevron.classList).indexOf("fa-chevron-up") === -1) {
			chevron.classList.remove("fa-chevron-down");
			chevron.classList.add("fa-chevron-up");

			task.classList.remove("hidden");
			task.classList.add("visible");
		} else {
			chevron.classList.remove("fa-chevron-up");
			chevron.classList.add("fa-chevron-down");

			task.classList.remove("visible");
			task.classList.add("hidden");
		}
	}

	let chevron = document.getElementById("chevron");
	chevron.addEventListener("click", function(event) {
		toggle(this);
	});

	chevron.addEventListener("keydown", function(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			toggle(this);
		}
	});

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();
	});
};