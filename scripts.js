document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const menuClose = document.querySelector('.menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-links li a');
  const joinWaitlistButtons = document.querySelectorAll('.cta-button, .mobile-cta-button, .cta-button3');

  // Open mobile menu
  menuToggle.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });

  // Close mobile menu
  menuClose.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });

  // Smooth scroll to sections when clicking menu links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close the menu after navigating
        mobileMenu.style.display = 'none';
      }
    });
  });

  // Smooth scroll to the footer section when clicking "Join Waitlist" buttons
  joinWaitlistButtons.forEach(button => {
    button.addEventListener('click', function () {
      const footerSection = document.getElementById('newsletter');

      if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Subscription form validation and success handling
document.getElementById('subscribe-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const errorMessage = document.getElementById('error-message');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validate email address
  if (emailPattern.test(email)) {
    errorMessage.style.display = 'none';

    // Simulate successful subscription
    setTimeout(() => {
      alert('Subscription successful! Thank you for subscribing.');
    }, 500);

    // Clear email field
    document.getElementById('email').value = '';
  } else {
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please enter a valid email address.';
  }
});

// Desktop navigation smooth scrolling
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});