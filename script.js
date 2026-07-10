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

// Si agregas un src al iframe, se mostrará automáticamente.
const videoFrame = document.getElementById('video-frame');
const videoPlaceholder = document.getElementById('video-placeholder');

if (videoFrame && videoPlaceholder && videoFrame.getAttribute('src')?.trim()) {
  videoFrame.style.display = 'block';
  videoPlaceholder.style.display = 'none';
}
