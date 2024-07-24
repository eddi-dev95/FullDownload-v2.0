document.addEventListener('DOMContentLoaded', () => {
  const animationLink = document.getElementById('plusButtom');

  if (animationLink) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationLink.classList.add('visible');
        } else {
          animationLink.classList.remove('visible');
        }
      });
    });

    observer.observe(animationLink);
  } else {
    console.error('Elemento con ID "plusButtom" no encontrado');
  };
});
   
document.addEventListener('DOMContentLoaded', () => {
  const nextSection = document.querySelector('.nextSection');

  if (nextSection) {
    nextSection.addEventListener('click', function(event) {
      event.preventDefault();

      const targetId = event.target.href.split('#')[1];
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', duration: 2000 });
      } else {
        console.warn('Target section not found:', targetId);
      }
    });
  } else {
    console.warn('Element with class "next-section" not found.');
  }
});

const overlay = document.querySelector('.frame');

overlay.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});
