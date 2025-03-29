
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach((el) => observer.observe(el));
});



document.addEventListener("DOMContentLoaded", function () {
    const dogPark = document.querySelectorAll(".puppy-park");

    function checkVisibility() {
        dogPark.forEach((park) => {
            const cats = park.querySelectorAll(".kitty-box");

            cats.forEach((cat, index) => {
                const rect = cat.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight - 100) { // Trigger 100px before entering
                    setTimeout(() => {
                        cat.classList.add("meow");
                    }, index * 300); // Delay each cat by 300ms
                }
            });
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Run on load in case elements are already visible
});
