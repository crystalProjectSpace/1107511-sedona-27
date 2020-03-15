var link = document.querySelector(".preview");
var form = document.querySelector(".search-hotels")

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("visually-hidden");
});
