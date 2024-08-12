const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((section) => {
      if (section.isIntersecting) {
        section.target.classList.add('is-active');

        if (section.target.classList.contains('section-04')) {
          window.addEventListener('scroll', scrollEnventforSection04);
        }

        if (section.target.classList.contains('section-08')) {
          requestAnimationFrame(countUp);
        }
      } else {
        section.target.classList.remove('is-active');
        if (section.target.classList.contains('section-04')) {
          section.target.classList.remove('scroll-up');
          window.removeEventListener('scroll', scrollEnventforSection04);
        }

        if (section.target.classList.contains('section-08')) {
          countLi.innerHTML = 418;
        }
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => {
  observer.observe(section);
});
