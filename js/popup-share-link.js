const popupShareLink = document.querySelector('.popup-share-link');
const closeButton = document.querySelector('.popup-share-link .close-button');
const shareLinkButton = document.querySelector('.share-link-button');
const linkUrl = 'http://melon.com/m6campaign';
const copyButton = document.querySelector('.copy-button');
console.log(linkUrl);

const clipboard = new ClipboardJS(copyButton);

clipboard.on('success', function () {
  alert('URL이 복사되었습니다.');
});

shareLinkButton.addEventListener('click', () => {
  popupShareLink.classList.add('is-active');
});

closeButton.addEventListener('click', () => {
  popupShareLink.classList.remove('is-active');
});

/* navigator 활용 방법 */
// copyButton.addEventListener('click', () => {
//   navigator.clipboard.writeText(linkUrl).then(() => {
//     alert('URL이 복사되었습니다.');
//   });
// });
