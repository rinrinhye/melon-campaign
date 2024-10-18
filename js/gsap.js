gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  start: 'top bottom',
  end: 'bottom 80%',
  toggleActions: 'play none none reverse',
});

// count up
const countSpan = document.querySelector('.count');
const DEFAULT_NUMBER = 418;
const TARGET_NUMBER = 1215;

let count = DEFAULT_NUMBER;

function countUp() {
  const tween = gsap.to(
    {},
    {
      duration: 1.8,
      onStart() {
        countSpan.textContent = DEFAULT_NUMBER;
      },
      onUpdate() {
        count += 8;
        countSpan.textContent = count;

        if (countSpan.textContent > TARGET_NUMBER) {
          countSpan.textContent = TARGET_NUMBER.toLocaleString();
        }
      },
    }
  );

  return tween;
}

// progress bar
function progressBarAnimation() {
  const tween = gsap.to('.progress-bar-fill', {
    width: '100%',
    duration: 30,
  });

  return tween;
}

//section-01
const section01 = gsap
  .timeline()
  .to('.section-01 .tr', { y: 0, opacity: 1, stagger: 0.4 });

ScrollTrigger.create({
  trigger: '.section-01',
  animation: section01,
  onLeave() {
    gsap.to('.section-01 .scroll-img', { opacity: 0 });
  },
  onEnterBack() {
    gsap.to('.section-01 .scroll-img', { opacity: 1 });
  },
});

//section-02
const section02 = gsap
  .timeline()
  .to('.section-02 .tr', {
    y: 0,
    opacity: 1,
    stagger: 0.2,
  })
  .to(
    '.section-02 li',
    {
      x: gsap.utils.wrap([-100, 100, -200, 200]),
      y: gsap.utils.wrap([0, 0, 40, 40]),
      ease: 'none',
    },
    '-=0.8'
  );

ScrollTrigger.create({
  trigger: '.section-02',
  animation: section02,
});

//section-03
const section03 = gsap.timeline().to('.section-03 .tr', {
  y: 0,
});

ScrollTrigger.create({
  trigger: '.section-03',
  animation: section03,
});

//section-04
const section04 = gsap
  .timeline()
  .to('.section-04 .text-top .tr', { opacity: 1, duration: 0.2 })
  .addPause()
  .to('.section-04 .text-top .tr', { opacity: 0 })
  .to(
    '.section-04 .video-box',
    {
      scale: 0.8,
      width: 432,
      height: 830,
      top: '-2%',
      left: '50%',
      borderTopRightRadius: 32,
      borderTopLeftRadius: 32,
      ease: 'none',
    },
    '<'
  )
  .to('.section-04 .text-bottom .tr', { opacity: 1, y: 0, color: 'black' }, '<')
  .to('.section-04 .device-frame', { opacity: 1 })
  .to('.section-04 .video-overlay', { opacity: 1 }, '<')
  .to('.section-04 .video-01-overlay', { opacity: 1 }, '-=0.3')
  .to('.section-04 .video-01-overlay', { opacity: 0 })
  .to('.section-04 .video-02', { xPercent: '-100' })
  .to('.section-04 .video-02-overlay', { opacity: 1 })
  .to('.section-04 .video-02-overlay', { opacity: 0 })
  .to('.section-04 .video-03', { xPercent: '-200' })
  .to('.section-04 .video-03-overlay', { opacity: 1 });

ScrollTrigger.create({
  trigger: '.section-04',
  start: 'top top',
  end: '+=1200',
  pin: true,
  animation: section04,

  onUpdate: ({ progress, direction }) => {
    if (progress > 0.3 && direction === 1) {
      section04.play();
    }
    if (progress < 0.2 && direction === -1) {
      section04.time(0);
    }
    if (progress < 0.2 && direction === 0) {
      section04.time(0);
    }
  },
});

//section-05
const section05 = gsap
  .timeline()
  .to('.section-05 .tr-01', {
    opacity: 1,
  })
  .to(
    '.section-05 li',
    { opacity: 1, scale: 1, x: 0, y: 0, ease: 'none', duration: 0.3 },
    '<'
  );

ScrollTrigger.create({
  trigger: '.section-05',
  animation: section05,
});

//section-06
ScrollTrigger.create({
  trigger: '.section-06',
  animation: gsap.to('.section-06 .tr', { opacity: 1, duration: 0.4 }),
});

//section-07
const section07 = gsap
  .timeline()
  .to('.section-07 .tr-01', { y: 0, duration: 0.6 })
  .to('.section-07 .tr-02', { opacity: 1, y: 0 }, '-=0.3')
  .to(
    '.section-07 .tag-list li',
    { opacity: 1, scale: 1.8, ease: 'none', duration: 0.1 },
    '<'
  );

ScrollTrigger.create({
  trigger: '.section-07',
  animation: section07,
});

//section-08
const section08 = gsap
  .timeline()
  .to('.section-08 .tr-01', { y: 0, opacity: 1 })
  .to('.section-08 .tr-02', { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
  .to('.section-08 .device-cell-img', { opacity: 1, duration: 0.2 }, '<')
  .add(countUp(), '<');

ScrollTrigger.create({
  trigger: '.section-08',
  animation: section08,
  onLeave() {
    count = DEFAULT_NUMBER;
  },
  onLeaveBack() {
    count = DEFAULT_NUMBER;
    section08.time(0);
  },
});

//section-09
const section09 = gsap.timeline().to('.section-09 .tr', {
  opacity: 1,
  stagger: 0.1,
  y: 0,
  duration: 1,
});

ScrollTrigger.create({
  trigger: '.section-09',
  start: '40% bottom',
  animation: section09,
});
