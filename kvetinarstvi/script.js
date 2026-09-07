const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});

const menuLinks = navMenu.querySelectorAll("a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
        "Děkujeme za zprávu. Brzy se vám ozveme.";

    form.reset();
});