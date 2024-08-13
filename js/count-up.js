const countLi = document.querySelector('.count-list .count');

const DEFAULTNUMBER = 418;
let count = DEFAULTNUMBER;
const targetNumber = 1215;

let lastScrollY = 0;

function countUp() {
  count += 8;

  if (count < targetNumber) {
    countLi.innerHTML = count.toLocaleString();
  }

  if (count > targetNumber) {
    countLi.innerHTML = targetNumber.toLocaleString();
    count = DEFAULTNUMBER;
    return cancelAnimationFrame(countUp);
  }

  requestAnimationFrame(countUp);
}
