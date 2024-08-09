const section02 = document.querySelector('.section-02');
const texts = section02.querySelectorAll('.text');

const expendedScreenList = section02.querySelector('.expended-screen-list');

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        texts.forEach((text) => {
          text.classList.add('text-up');
        });
        expendedScreenList.classList.add('is-focused');
      } else {
        texts.forEach((text) => {
          text.classList.remove('text-up');
        });
        expendedScreenList.classList.remove('is-focused');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(section02);
