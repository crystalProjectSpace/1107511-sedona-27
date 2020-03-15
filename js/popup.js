var link = document.querySelector(".preview");
var form = document.querySelector(".search-hotels");
var button = document.querySelector(".search");
var input = document.querySelector("input[text]");


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

form.addEventListener("submit", function(evt){
  if (!input.value) {
    evt.preventDefault();
  }
});
