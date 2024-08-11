const section04 = document.querySelector('.section-04');
const section04Inner = section04.querySelector('.section-inner');
const videoBox = section04.querySelector('.video-box');
const deviceFrame = section04.querySelector('.device-frame');
const texts = section04.querySelectorAll('.text');

const observer = new IntersectionObserver(
  (entries) => {
    console.log(entries);
    entries.forEach((entry) => {
      console.log(entry.intersectionRect.y);
      console.log(entry.intersectionRatio);
      console.log(entry.isIntersecting);
      console.log(entry);

      if (entry.isIntersecting) {
        console.log(entry);
        videoBox.classList.add('is-active');
        deviceFrame.classList.add('is-active');

        texts.forEach((text) => {
          text.classList.add('text-up');
        });
      } else {
        videoBox.classList.remove('is-active');
        deviceFrame.classList.remove('is-active');
        texts.forEach((text) => {
          text.classList.remove('text-up');
        });
      }
    });
  },
  { threshold: 0.4 }
);

observer.observe(section04);

function de(e) {
  console.log(scrollY);

  if (scrollY > 4000) {
    if (!videoBox.classList.contains('is-active')) {
    } else {
    }
  }
}

// videoBox.classList.add('is-active');
// deviceFrame.classList.add('is-active');

// videoBox.classList.remove('is-active');
// deviceFrame.classList.remove('is-active');
