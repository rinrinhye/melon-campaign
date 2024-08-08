const section03 = document.querySelector('.section-03');
const texts = section03.querySelectorAll('.text');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        texts.forEach((text) => {
          text.classList.add('text-up');
        });
      } else {
        texts.forEach((text) => {
          text.classList.remove('text-up');
        });
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(section03);
