var hambergerIcon = document.querySelector(".hamberger");
var navbar = document.querySelector("nav");
var navlinks = document.querySelectorAll(".nav-link");
var mediaQuary = window.matchMedia("(max-width: 575px)");
var changedToh2 = document.querySelector(".changedToh2");
var itchanged = false;

hambergerIcon.addEventListener("click", () => {
  // navbar.style.display = "block";
  // setTimeout(() => {
  navbar.classList.toggle("nav-active");
  setTimeout(() => {
    navbar.classList.toggle("close_transition");
  }, 500);
  // }, 10);
})
console.log(window.innerWidth);
if (window.innerWidth <= 576) {
  changedToh2.outerHTML = "<h2 class='myH2 changedToh2'>" + changedToh2.innerHTML + "</h2>";
  itchanged = true;
}
mediaQuary.addListener(change);
function change() {
  var changedToh2 = document.querySelector(".changedToh2");
  if (mediaQuary.matches) {
    itchanged = true;
    changedToh2.outerHTML = "<h2 class='myH2 changedToh2'>" + changedToh2.innerHTML + "</h2>";
    console.log("matches");
  }
  else {
    if (itchanged) {
      console.log("not matvhed and true");
      changedToh2.outerHTML = "<h1 class='myH1 changedToh2'>" + changedToh2.innerHTML + "</h1>";
    }
  }
}
for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", () => {
    navbar.classList.remove("nav-active");
  })
}
