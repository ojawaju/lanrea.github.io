// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-item");
  
    function changeActiveLink() {
      let index = sections.length;
  
      while (--index && window.scrollY + 70 < sections[index].offsetTop) {}
      
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }
  
    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
  
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Offset for header
          behavior: "smooth"
        });
      });
    });
  });