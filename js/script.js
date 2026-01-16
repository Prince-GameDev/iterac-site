// Sticky Nav
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', ()=> {
  navLinks.classList.toggle('open');
});

// EmailJS Contact Form
function sendMail() {
  const params = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    message: document.querySelector("#message").value
  };

  emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID", params)
  .then(()=> alert("Message Sent Successfully!"))
  .catch(()=> alert("Failed to send message!"));
}



