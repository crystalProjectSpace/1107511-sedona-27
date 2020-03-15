var link = document.querySelector(".preview");
var form = document.querySelector(".search-hotels")

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.remove("search-hotels-bounce");
  form.offsetWidth = form.offsetWidth;
  form.classList.add("search-hotels-bounce");
  form.classList.toggle("visually-hidden");
});
