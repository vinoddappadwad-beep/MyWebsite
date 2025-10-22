const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) =>
{    
    e.preventDefault();
    alert("Thank you for contacting me! 📧");
});