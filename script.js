document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    rootMargin: "0px",
    threshold: 0.5,
  };
  const animationLink = document.getElementById("plusButtom");

  if (animationLink) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationLink.classList.add("visible");
        } else {
          animationLink.classList.remove("visible");
        }
      });
    }, observerOptions);

    observer.observe(animationLink);
  }

  const nextSection = document.querySelector(".nextSection");

  if (nextSection) {
    nextSection.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = event.currentTarget.hash.substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  const overlay = document.querySelector(".frame");

  if (overlay) {
    overlay.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    overlay.addEventListener("touchstart", (event) => {
      event.preventDefault();
    });
  }
});
