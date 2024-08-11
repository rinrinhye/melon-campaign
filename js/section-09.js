const section09 = document.querySelector('.section-09');
const text = section09.querySelector('.text');
const storeWrap = section09.querySelector('.store-wrap');
const linkWrap = section09.querySelector('.link-wrap');

const defaultNumber = 418;
const resultNumber = 1215;
let countNumber = defaultNumber;

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        text.classList.add('up');
        storeWrap.classList.add('up');
        linkWrap.classList.add('up');
      } else {
        text.classList.remove('up');
        storeWrap.classList.remove('up');
        linkWrap.classList.remove('up');
      }
    });
  },
  {
    threshold: 0.3,
  }
);

observer.observe(section09);
