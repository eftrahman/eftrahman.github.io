document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "scale(1.05)";
                entry.target.style.transition = "transform 0.5s ease-in-out";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    cards.forEach(card => {
        observer.observe(card);
    });
});
