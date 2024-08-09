const section05 = document.querySelector('.section-05');
const imgList = section05.querySelector('.img-list');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        imgList.classList.add('is-focused');
      } else {
        imgList.classList.remove('is-focused');
      }
    });
  },
  {
    threshold: 0.1,
  }
);

observer.observe(section05);
