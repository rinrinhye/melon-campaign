const section04 = document.querySelector('.section-04');

const scrollEnventforSection04 = () => {
  toggleClassListsInSection04(section04);
};

function toggleClassListsInSection04(section) {
  const currentScrollY = window.scrollY;
  const absoluteTop = section04.getBoundingClientRect().top + window.scrollY;

  const scrollDown = lastScrollY < currentScrollY ? true : false;
  const scrollUp = lastScrollY > currentScrollY ? true : false;

  if (scrollUp) {
    if (currentScrollY < absoluteTop + 200 && currentScrollY > absoluteTop) {
      section.classList.remove('scroll-down');
      section.classList.add('scroll-up');
    }
  }
  if (scrollDown) {
    if (currentScrollY > absoluteTop + 200) {
      section.classList.remove('scroll-up');
      section.classList.add('scroll-down');
    }
  }

  lastScrollY = currentScrollY;
}
