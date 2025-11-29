document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small delay based on index for staggered effect if needed, 
                // but here we just add the class when it comes into view.
                // For list items, we can stagger them manually or via CSS delay, 
                // but let's just trigger them.
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 50); // Slight stagger if multiple items appear at once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe list items
    const listItems = document.querySelectorAll('ul li, ol li');
    listItems.forEach(item => {
        observer.observe(item);
    });
});
