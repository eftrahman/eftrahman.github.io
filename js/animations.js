document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style
