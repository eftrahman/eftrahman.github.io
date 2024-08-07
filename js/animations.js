document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(0.90)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
    });
});
