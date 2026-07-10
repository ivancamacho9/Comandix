const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

const track = document.getElementById('carousel-track');
const prev = document.querySelector('.carousel-btn.prev');
const next = document.querySelector('.carousel-btn.next');

const scrollAmount = () => Math.min(track.clientWidth * 0.9, 320);

if (prev && next && track) {
  prev.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });

  next.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
}

const videoPlayer = document.querySelector('.video-player');
const videoOverlay = document.querySelector('[data-video-play]');

if (videoPlayer && videoOverlay) {
  const hideOverlay = () => videoOverlay.classList.add('is-hidden');
  const showOverlay = () => videoOverlay.classList.remove('is-hidden');

  videoOverlay.addEventListener('click', async () => {
    hideOverlay();

    try {
      await videoPlayer.play();
    } catch (error) {
      showOverlay();
    }
  });

  videoPlayer.addEventListener('play', hideOverlay);
  videoPlayer.addEventListener('pause', () => {
    if (videoPlayer.currentTime === 0) {
      showOverlay();
    }
  });
  videoPlayer.addEventListener('ended', showOverlay);
}
