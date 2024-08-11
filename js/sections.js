const section01 = document.querySelector('.section-01');
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((section) => {
      if (section.isIntersecting) {
        section.target.classList.add('is-active');
      } else {
        section.target.classList.remove('is-active');
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((section) => {
  observer.observe(section);
});
