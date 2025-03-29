
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


document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-card");
    const container = document.querySelector(".testimonial-container");
    const dotsContainer = document.querySelector(".testimonial-dots");

    let index = 0;
    let interval;

    // Create dots
    testimonials.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    // Auto-Swipe Function
    function autoSwipe() {
        interval = setInterval(() => {
            index = (index + 1) % testimonials.length;
            updateSlider();
        }, 3000);
    }

    // Go to Specific Slide
    function goToSlide(i) {
        clearInterval(interval);
        index = i;
        updateSlider();
        autoSwipe();
    }

    // Update Slider Position & Dots
    function updateSlider() {
        const offset = index * (testimonials[0].offsetWidth + 20);
        container.scrollTo({ left: offset, behavior: "smooth" });

        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Observe Visibility for Animation
    const observerOptions = { root: null, threshold: 0.3 };
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    testimonials.forEach(testimonial => observer.observe(testimonial));

    // Start Auto-Swipe on Load
    autoSwipe();
});
