const countLi = document.querySelector('.count-list .count');

let defaultNumber = 418;
const targetNumber = 1215;

let lastScrollY = 0;

function countUp() {
  defaultNumber += 8;

  if (defaultNumber < 1215) {
    countLi.innerHTML = defaultNumber.toLocaleString();
  }

  if (defaultNumber > 1215) {
    countLi.innerHTML = targetNumber.toLocaleString();
    defaultNumber = 418;
    return cancelAnimationFrame(countUp);
  }

  requestAnimationFrame(countUp);
}
