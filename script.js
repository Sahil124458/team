document.addEventListener('DOMContentLoaded', function() {
            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            

            // Mobile menu toggle
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');
            
            menuToggle.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#') return;
                    
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        // Close mobile menu if open
                        navLinks.classList.remove('active');
                    }
                });
            });

            // Modal functionality
            const modalTriggers = document.querySelectorAll('.view-profile');
            const modals = document.querySelectorAll('.modal');
            const closeButtons = document.querySelectorAll('.close-modal');

            modalTriggers.forEach(trigger => {
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    const member = this.getAttribute('data-member');
                    const modal = document.getElementById(`${member}-modal`);
                    if (modal) {
                        modal.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                        
                        // Animate skill bars
                        setTimeout(() => {
                            const skillBars = modal.querySelectorAll('.skill-progress');
                            skillBars.forEach(bar => {
                                const width = bar.getAttribute('data-width');
                                bar.style.width = width;
                            });
                        }, 300);
                    }
                });
            });

            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const modal = this.closest('.modal');
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    
                    // Reset skill bars
                    const skillBars = modal.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        bar.style.width = '0';
                    });
                });
            });

            // Close modal when clicking outside
            window.addEventListener('click', function(e) {
                if (e.target.classList.contains('modal')) {
                    e.target.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    
                    // Reset skill bars
                    const skillBars = e.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        bar.style.width = '0';
                    });
                }
            });

            // Fade-in animation on scroll
            const fadeElements = document.querySelectorAll('.fade-in');
            
            function checkFade() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementBottom = element.getBoundingClientRect().bottom;
                    const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
                    
                    if (isVisible) {
                        element.classList.add('visible');
                    }
                });
            }
            
            // Initial check
            checkFade();
            
            // Check on scroll
            window.addEventListener('scroll', checkFade);
        });
        const modal = document.getElementById("contactModal");
  const openBtn = document.getElementById("openContact");
  const closeBtn = document.getElementById("closeModal");
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  // Open modal
  openBtn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = "flex";
  };

  // Close modal
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  // Close if click outside
  window.onclick = function(e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };

  // Form Submit
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    msg.style.display = "block";
    form.reset();
    setTimeout(() => {
      msg.style.display = "none";
      modal.style.display = "none";
    }, 2000);
  });