// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the target section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scroll to target
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update active link
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Update active link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile menu handling (optional - for better mobile experience)
if (window.innerWidth <= 700) {
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    // You can add a hamburger menu here if needed
    // This is a simple version that keeps the existing layout
}

// Download CV button functionality
document.querySelector('.btn-cv').addEventListener('click', function(e) {
    e.preventDefault();
    // You can replace this with actual CV download link
    alert('CV download will be available soon!');
    // For actual download, uncomment below:
    // window.location.href = './path-to-your-cv.pdf';
});

// Add smooth scroll to contact email
document.querySelector('.contact-email').addEventListener('click', function(e) {
    // Email link opens default mail client - that's fine
    // No preventDefault needed
});