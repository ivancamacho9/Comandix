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

const videoPlayer = document.getElementById('video-player');
const videoPoster = document.getElementById('video-poster');
const videoLaunch = document.querySelector('[data-video-launch]');

if (videoPlayer && videoPoster && videoLaunch) {
  const source = videoPlayer.querySelector('source[data-src]');

  const startVideo = async () => {
    if (source && !source.src) {
      source.src = source.dataset.src;
      videoPlayer.load();
    }

    videoPoster.hidden = true;
    videoPlayer.hidden = false;

    try {
      await videoPlayer.play();
    } catch (error) {
      // El usuario puede iniciar la reproducción manualmente si el navegador lo bloquea.
    }
  };

  videoLaunch.addEventListener('click', startVideo);
  videoPlayer.addEventListener('ended', () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayer.hidden = true;
    videoPoster.hidden = false;
  });
}
