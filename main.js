const buttons = document.querySelectorAll('.btn button')


buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
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

// Videos

const bigPreview = document.querySelector('.big-video-preview');
const bigImg = bigPreview.querySelector('img')
const smallVideos = document.querySelectorAll('.small-video')

smallVideos.forEach(small => {
    small.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        const bigVideoLink = bigPreview.dataset.video;
        const bigVideoImg = bigImg.src;
        const smallVideoLink = small.dataset.video;
        const smallVideoImg = small.querySelector('img').src;
        bigPreview.dataset.video = smallVideoLink;
        bigImg.src = smallVideoImg;
        small.dataset.video = bigVideoLink;
        small.querySelector('img').src = bigVideoImg;
    })
})

const playButton = bigPreview.querySelector('.play-button')
playButton.addEventListener('click', (event) => {
    event.preventDefault();
    const videoLink = bigPreview.dataset.video;
})
// Buttons "show more" in media, Page 7

const paragraph = document.querySelectorAll('.dynamic-text');
const toggleButtons = document.querySelectorAll('.toggle-text');

paragraph.forEach((paragraph, index) => {
    const toggleBtn = toggleButtons[index];
    const fullText = paragraph.textContent.trim();
    const words = fullText.split(' ');
    const previewText = words.slice(0, 3).join(' ') + '...';

    let isFull = false;
    paragraph.textContent = previewText;

    toggleBtn.addEventListener('click', () => {
        if (isFull) {
            paragraph.textContent = previewText;
            toggleBtn.textContent = 'Show more'
        } else {
            paragraph.textContent = fullText;
            toggleBtn.textContent = 'Show less'
        }
        isFull = !isFull
    });
});

// Scroll-top button

document.querySelector('.scroll-top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
