const $burgerMenu = document.querySelector("#burger-menu");
const $menu = document.querySelector(".menu");
const ipad = window.matchMedia("(max-width: 767px)");
runBurgerMenu(ipad.matches);
ipad.addListener((event) => {
  runBurgerMenu(event.matches);
});

function hideShow() {
  $menu.classList.toggle("is-active");
  $burgerMenu.classList.toggle("is-active");
}

function runBurgerMenu(yes) {
  if (yes) {
    $burgerMenu.addEventListener("click", hideShow);
  } else {
    $burgerMenu.removeEventListener("click", hideShow);
  }
}

var specifiedElement = document.querySelector("nav");
document.addEventListener("click", function (event) {
  var isClickInsideIcon = $burgerMenu.contains(event.target);
  var isClickInside = $menu.contains(event.target);
  if (
    !isClickInside &&
    !isClickInsideIcon &&
    $menu.classList.contains("is-active")
  ) {
    $menu.classList.remove("is-active");
    $burgerMenu.classList.remove("is-active");
  }
});
