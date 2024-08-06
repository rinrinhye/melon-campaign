const section01 = document.querySelector('.section-01');

const texts = section01.querySelectorAll('.text');

window.addEventListener('load', () => {
  texts.forEach((text) => {
    text.classList.add('text-up');
  });
});
