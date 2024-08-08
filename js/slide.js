const slideTopWrapper = document.querySelector('.slide-top-wrapper');
const slideBottomWrapper = document.querySelector('.slide-bottom-wrapper');
const slideTop = document.querySelector('.slide-top');
const slideBottom = document.querySelector('.slide-bottom');

const cloneSlideTop = slideTop.cloneNode(true);
const cloneSlideBottom = slideBottom.cloneNode(true);

slideTop.after(cloneSlideTop);
slideBottom.after(cloneSlideBottom);
