const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");


// HAMBURGER MENU

menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


// Po kliknutí na odkaz se menu zavře

const menuLinks = navMenu.querySelectorAll("a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


// FORMULÁŘ

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Zpráva byla odeslána. Ozveme se vám.";

    form.reset();

});