document.addEventListener("DOMContentLoaded", function() {

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        // Optional: change menu icon
        if (navLinks.classList.contains('show')) {
            menuToggle.innerHTML = '&times;'; // Close icon
        } else {
            menuToggle.innerHTML = '&#9776;'; // Hamburger icon
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll('#nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('show')) {
                navLinks.classList.remove('show');
                menuToggle.innerHTML = '&#9776;';
            }
        });
    });

    // Scroll Reveal Animation
    function reveal() {
        const reveals = document.querySelectorAll(".reveal");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 100; // Distance from bottom of viewport to trigger animation

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    // Initial reveal check
    reveal();

    // Active Nav Link Highlighting on Scroll
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100; // Offset for header height
            let sectionId = current.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector("#nav-links a[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector("#nav-links a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        // You can add code here to send the form data to a backend service like EmailJS, Formspree, etc.
        // For this example, we'll just show the success message.
        
        successMessage.style.display = 'block';
        contactForm.reset(); // Clear the form fields

        // Hide the message after a few seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    });

});