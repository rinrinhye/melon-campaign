const section07 = document.querySelector('.section-07');
const text = section07.querySelector('.text');
const deviceContent = section07.querySelector('.device-content');

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        text.classList.add('up');
        deviceContent.classList.add('up');
      } else {
        text.classList.remove('up');
        deviceContent.classList.remove('up');
      }
    });
  },
  {
    threshold: 0.4,
  }
);

observer.observe(section07);
