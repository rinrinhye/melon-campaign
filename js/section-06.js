const section06 = document.querySelector('.section-06');
const text = section06.querySelector('.text');

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        text.classList.add('opacity');
      } else {
        text.classList.remove('opacity');
      }
    });
  },
  {
    threshold: 0.4,
  }
);

observer.observe(section06);
