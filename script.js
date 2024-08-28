document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scrolling for the "Learn More" button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('#content').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Functionality for "Read More" buttons
    function toggleReadMore(button) {
        const content = button.previousElementSibling; // Select the content right before the button
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
            button.textContent = "Read Less";
        } else {
            content.style.display = "none";
            button.textContent = "Read More";
        }
    }

    // Attach toggle function to each "Read More" button
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link action
            toggleReadMore(this);
        });
    });

    // Burger menu functionality 
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        if (burger) {
            burger.addEventListener('click', () => {
                // Toggle Nav
                nav.classList.toggle('nav-active');

                // Animate Links
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });

                // Burger Animation
                burger.classList.toggle('toggle');
            });
        }
    };

    navSlide();
});
