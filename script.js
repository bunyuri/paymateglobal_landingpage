document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});