const buttons = document.querySelectorAll('.btn button')


buttons.forEach((button) => {
    button.addEventListener("click", function () {
        let container = button.closest('.text-content') || button.closest('.hills_content');

        if (!container) return;

        const fullText = container.querySelector('.full-text')
        const shortText = container.querySelector('.short-text')

        if (!fullText || !shortText) return;

        fullText.classList.toggle('hidden');
        shortText.classList.toggle('hidden');


        button.textContent = fullText.classList.contains('hidden') ? 'Learn More' : "Hide"
    })
})

/// Slider

const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const btnPrev = document.querySelector('.arrow-left');
const btnNext = document.querySelector('.arrow-right');

let currentIndex = 0;
const totalSlides = slides.length;

function updateSlider() {
    const offset = -currentIndex * (slides[0].offsetWidth + 40);
    sliderTrack.style.transform = `translateX(${offset}px)`;


    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) {
        dots[currentIndex].classList.add('active');
    }


    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === totalSlides - 1;
}


btnNext.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
        updateSlider();
    }
});


btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
    });
});

updateSlider();
