document.addEventListener('DOMContentLoaded', () => {
    const rocket = document.getElementById('rocket');
    const launchBtn = document.getElementById('launch-btn');
    const launchScreen = document.getElementById('launch-screen');
    const portfolio = document.getElementById('portfolio');
  
    launchBtn.addEventListener('click', () => {
      rocket.style.transform = 'translateY(-100vh)';
      setTimeout(() => {
        launchScreen.style.display = 'none';
        portfolio.classList.remove('hidden');
      }, 2000);
    });
  
    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');
    window.addEventListener('scroll', () => {
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveals[i].classList.add('active');
        }
      }
    });
  });
  