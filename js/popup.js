var link = document.querySelector(".preview");
var form = document.querySelector(".search-hotels");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adult = form.querySelector("[name=adult-number]");
var child = form.querySelector("[name=child-number]");

document.addEventListener("DOMContentLoaded", function(evt) {
	form.classList.add("visually-hidden");
});
link.addEventListener("click", function(evt) {
	evt.preventDefault();
	form.classList.toggle("visually-hidden");
	form.classList.remove("search-hotels-bounce");
	form.offsetWidth = form.offsetWidth;
	form.classList.add("search-hotels-bounce");
	arrival.focus();
});
window.addEventListener("keydown", function(evt) {
	if(evt.keyCode === 27) {
		evt.preventDefault();
		if(form.classList.contains("search-hotels")) {
			form.classList.add("visually-hidden");
		}
	}
});
form.addEventListener("submit", function(evt) {
	if(!arrival.value || !departure.value || !adult.value || !child.value) {
		evt.preventDefault();
		console.log("Нужно ввести данные");
		form.classList.remove("search-hotels-error");
		form.offsetWidth = form.offsetWidth;
		form.classList.add("search-hotels-error");
	}
});
