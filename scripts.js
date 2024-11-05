// script.js
document.getElementById('tab-home').addEventListener('click', function() {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('tab-about-us').addEventListener('click', function() {
  document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('tab-features').addEventListener('click', function() {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('tab-testimonials').addEventListener('click', function() {
  document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('button-join-waitlist').addEventListener('click', function() {
  document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('button-subscribe').addEventListener('click', function() {
  document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const errorMessage = document.getElementById('error-message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
    errorMessage.style.display = 'none';
    alert('Subscription successful!');
    // You can add your form submission logic here
  } else {
    errorMessage.style.display = 'block';
  }
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const errorMessage = document.getElementById('error-message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(email)) {
      errorMessage.style.display = 'none';

      // Submit the form if email is valid
      this.submit();

      // Listen for Mailchimp responses
      document.getElementById("mce-error-response").addEventListener("DOMSubtreeModified", function() {
          if (this.textContent.trim()) {
              errorMessage.style.display = 'block';
              errorMessage.textContent = 'There was an issue with your subscription. Please try again.';
          }
      });

      document.getElementById("mce-success-response").addEventListener("DOMSubtreeModified", function() {
          if (this.textContent.trim()) {
              errorMessage.style.display = 'none';
              alert('Subscription successful!');
          }
      });
  } else {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Please enter a valid email address.';
  }
});

window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  const headerTop = header.offsetTop;

  if (window.pageYOffset > headerTop) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});

// Function to scroll to a section with an offset
function scrollToSection(sectionId) {
  const headerHeight = document.querySelector('.header').offsetHeight;
  const section = document.getElementById(sectionId);
  const sectionTop = section.offsetTop - headerHeight;

  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth'
  });
}
