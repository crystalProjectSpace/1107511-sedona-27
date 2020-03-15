var link = document.querySelector(".preview");
var form = document.querySelector(".search-hotels");
var button = document.querySelector(".search");
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
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (form.classList.contains("search-hotels")) {
      form.classList.add("visually-hidden");
    }
  }
});

button.addEventListener("click", function(evt){
  if (!adult-number.value || !child-number.value) {
    evt.preventDefault();
    alert("Только 2");
    console.log("Нужно ввести данные");
  } else {
    localStorage.setItem("search-hotels-number", adult-number.value);
  }
});
