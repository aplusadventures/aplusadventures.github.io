document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation ---
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const isExpanded = navMenu.classList.contains('active');
            hamburger.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- Header Scroll Effect ---
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Testimonial Slider ---
    const slider = document.getElementById('testimonial-slider');
    if (slider) {
        const slidesContainer = slider.querySelector('.testimonial-slides');
        const slides = slider.querySelectorAll('.testimonial-slide');
        const prevBtn = document.getElementById('prev-testimonial');
        const nextBtn = document.getElementById('next-testimonial');
        const dotsContainer = document.getElementById('testimonial-dots');

        if (slides.length > 0) {
            let currentIndex = 0;
            let slideInterval;

            // Create dots
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.classList.add('dot');
                dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
                if (i === 0) dot.classList.add('active');
                dotsContainer.appendChild(dot);
                dot.addEventListener('click', () => {
                    goToSlide(i);
                    resetInterval();
                });
            });
            const dots = dotsContainer.querySelectorAll('.dot');

            const goToSlide = (index) => {
                slidesContainer.style.transform = `translateX(-${index * 100}%)`;
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
                currentIndex = index;
            };

            const slideNext = () => {
                const nextIndex = (currentIndex + 1) % slides.length;
                goToSlide(nextIndex);
            };

            const slidePrev = () => {
                const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
                goToSlide(prevIndex);
            };
            
            const startInterval = () => {
                slideInterval = setInterval(slideNext, 7000);
            };

            const resetInterval = () => {
                clearInterval(slideInterval);
                startInterval();
            };

            nextBtn.addEventListener('click', () => {
                slideNext();
                resetInterval();
            });
            prevBtn.addEventListener('click', () => {
                slidePrev();
                resetInterval();
            });

            // Pause on hover
            slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
            slider.addEventListener('mouseleave', startInterval);

            startInterval();
        }
    }
});
