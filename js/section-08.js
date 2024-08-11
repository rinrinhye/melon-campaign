const section08 = document.querySelector('.section-08');
const text = section08.querySelector('.text');
const deviceContent = section08.querySelector('.device-content');
const count = section08.querySelector('.count');

const defaultNumber = 418;
const resultNumber = 1215;
let countNumber = defaultNumber;

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        text.classList.add('up');
        deviceContent.classList.add('up');

        setTimeout(() => {
          requestAnimationFrame(countUp);
        }, 1000);
      } else {
        text.classList.remove('up');
        deviceContent.classList.remove('up');
        count.innerHTML = defaultNumber;
      }
    });
  },
  {
    threshold: 0.4,
  }
);

observer.observe(section08);

function countUp() {
  countNumber += 8;
  count.innerHTML = countNumber.toLocaleString();

  if (countNumber >= resultNumber) {
    count.innerHTML = resultNumber.toLocaleString();
    countNumber = defaultNumber;
    return cancelAnimationFrame(countUp);
  }

  requestAnimationFrame(countUp);
}
