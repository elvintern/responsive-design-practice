const moreBtn = document.querySelector('.info .video-title .btn--more');
const title = document.querySelector('.info .video-title .title');

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});