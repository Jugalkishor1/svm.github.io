
// Hero section js
    // Dynamic text effect
    const heading = document.getElementById("dynamic-heading");
    const phrases = [
        "Empowering Students for Tomorrow",
        "Your Path to Success Starts Here"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        heading.textContent = isDeleting
            ? currentPhrase.slice(0, charIndex--)
            : currentPhrase.slice(0, charIndex++);

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();

    // Particle effect
    const particleContainer = document.getElementById("particle-container");

    function createParticle() {
        const particle = document.createElement("div");
        const size = Math.random() * 10 + 5;
        particle.classList.add("particle");
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
        particleContainer.appendChild(particle);

        setTimeout(() => particle.remove(), 8000);
    }

    setInterval(createParticle, 300);

// Animation trigger for feature cards
    document.addEventListener("DOMContentLoaded", () => {
        const cards = document.querySelectorAll(".feature-card");
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("appear");
            }, index * 300);
        });
    });

// About us 
  const imageContainer = document.getElementById('image-container');
  const tooltip = document.getElementById('tooltip');

  imageContainer.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
  });

  imageContainer.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
  });