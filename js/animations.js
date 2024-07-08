document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    header.style.animation = "fadeIn 2s ease-in-out";

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.style.animation = "zoomInCard 1s ease-in-out";

        card.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });

        card.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.transition = "transform 0.3s ease-in-out";
        });
    });
});
