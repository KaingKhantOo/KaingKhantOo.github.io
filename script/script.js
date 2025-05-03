// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to a server here
            // For this example, we'll just show a thank you message
            
            // Hide the form
            contactForm.classList.add('hidden');
            
            // Show the thank you message
            thankYouMessage.classList.remove('hidden');
            
            // Scroll to the thank you message
            thankYouMessage.scrollIntoView({ behavior: 'smooth' });
            
            // Reset the form (optional)
            setTimeout(() => {
                contactForm.reset();
                contactForm.classList.remove('hidden');
                thankYouMessage.classList.add('hidden');
            }, 5000); // Reset after 5 seconds
        });
    }

    // Simple animation for sections when they come into view
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });
});
