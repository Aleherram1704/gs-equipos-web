const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.slider-dots');

let currentIndex = 0;

/* Crear dots */
slides.forEach((_, index) => {
  const dot = document.createElement('div');
  dot.classList.add('slider-dot');
  if (index === 0) dot.classList.add('active');

  dot.addEventListener('click', () => {
    goToSlide(index);
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider-dot');

function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex =
    (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

/* Autoplay */
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}, 6000);

feather.replace();