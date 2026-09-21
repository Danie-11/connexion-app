const slides = Array.from(document.querySelectorAll('.slide'));
const dots = Array.from(document.querySelectorAll('.dot'));
const prevBtn = document.querySelector('[data-action="prev"]');
const nextBtn = document.querySelector('[data-action="next"]');

let currentIndex = 0;

function showSlide(index) {
  currentIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('is-active', slideIndex === currentIndex);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle('is-active', dotIndex === currentIndex);
  });
}

prevBtn?.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextBtn?.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    showSlide(Number(dot.dataset.index));
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') showSlide(currentIndex + 1);
  if (event.key === 'ArrowLeft') showSlide(currentIndex - 1);
});

let touchStartX = 0;

window.addEventListener('touchstart', (event) => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });

window.addEventListener('touchend', (event) => {
  const touchEndX = event.changedTouches[0].screenX;
  const delta = touchEndX - touchStartX;

  if (Math.abs(delta) > 40) {
    if (delta < 0) showSlide(currentIndex + 1);
    if (delta > 0) showSlide(currentIndex - 1);
  }
}, { passive: true });

showSlide(0);
