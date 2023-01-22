const navButton = document.querySelector(".nav__button");
const body = document.querySelector("body");
const header = document.querySelector("header");
const navMenu = document.querySelector(".nav__menu");

body.style.height = `${window.innerHeight}px`;

navMenu.style.top = `${header.clientHeight + 2}px`;

navButton.addEventListener("click", () => {

  if (navButton.getAttribute("aria-pressed") == "false") {
    navButton.setAttribute("aria-pressed", "true");

    navMenu.style.left = "0";
    navMenu.style.bottom = "0";
  } else {
    navButton.setAttribute("aria-pressed", "false");

    navMenu.style.left = "100%";
    navMenu.style.bottom = "100%";
  }

});
