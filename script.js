document.addEventListener("DOMContentLoaded", () => {
  // ===== MOBILE MENU =====
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li a");
  const submenuButtons = document.querySelectorAll(".submenu-btn");

  const closeSubmenus = () => {
    document.querySelectorAll(".has-submenu.submenu-open").forEach((el) => {
      el.classList.remove("submenu-open");
      const btn = el.querySelector(".submenu-btn");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  };

  // Function to close mobile menu and reset icon
  const closeMobileMenu = () => {
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      closeSubmenus();
      const icon = menuBtn.querySelector("i");
      if (icon.classList.contains("fa-times")) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    }
  };

  // Mobile menu toggle
  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      if (!navMenu.classList.contains("active")) {
        closeSubmenus();
      }
      const icon = menuBtn.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  }

  submenuButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = btn.closest(".has-submenu");
      if (!parent) return;
      const isOpen = parent.classList.toggle("submenu-open");
      btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  });

  // Close mobile menu when any nav link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
        
        // Close mobile menu after smooth scroll
        setTimeout(() => {
          closeMobileMenu();
        }, 300);
      }
    });
  });

  // ===== SCROLL ANIMATIONS =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });

  // ===== STATS COUNTER =====
  function animateStats() {
    document.querySelectorAll(".stat-number").forEach((el) => {
      const originalText = el.textContent;
      const target = parseInt(originalText.replace(/\D/g, "")) || 0;
      let current = 0;
      const increment = Math.max(1, Math.floor(target / 100));
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = originalText;
          clearInterval(timer);
        } else {
          el.textContent = current + "+";
        }
      }, 20);
    });
  }

  const statsSection = document.querySelector(".statistics");
  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStats();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    statsObserver.observe(statsSection);
  }

  // ===== HEADER SCROLL EFFECT =====
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.1)";
      header.style.background = "rgba(255, 255, 255, 0.95)";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
      header.style.background = "var(--white)";
    }
  });

  // ===== CONTACT FORM =====
 // ===== CONTACT FORM (EmailJS Integration) =====
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    formStatus.textContent = "Sending...";
    formStatus.style.color = "#555";

    emailjs.sendForm("service_gl39cc6", "template_euocxae", this)
      .then(() => {
        formStatus.textContent = "✅ Thank you! Your message has been sent successfully.";
        formStatus.style.color = "green";
        form.reset();
      })
      .catch((error) => {
        formStatus.textContent = "❌ Oops! Something went wrong. Please try again later.";
        formStatus.style.color = "red";
        console.error("EmailJS Error:", error);
      });
  });
}




  // ===== CLOSE MENU WHEN CLICKING OUTSIDE =====
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = navMenu?.contains(e.target);
    const isClickOnMenuButton = menuBtn?.contains(e.target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
      closeSubmenus();
    }

    if (!isClickInsideMenu && !isClickOnMenuButton && navMenu?.classList.contains('active')) {
      closeMobileMenu();
    }
  });

var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    
    if ("IntersectionObserver" in window) {
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyImage = entry.target;
                    lazyImage.src = lazyImage.dataset.src;
                    lazyImage.classList.remove("lazy");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        });
        
        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    }


  // ===== CLOSE MENU ON ESCAPE KEY =====
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSubmenus();
      if (navMenu?.classList.contains('active')) {
        closeMobileMenu();
      }
    }
  });
});