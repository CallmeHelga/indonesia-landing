// buttons
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

//Button "start travelling"

const startBtn = document.getElementById('start-btn');
const targetSection = document.getElementById('start');

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Burger-menu

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('.nav');
    const menuIcon = menuBtn.querySelector('i');
    const headerWrapper = document.querySelector('.header-wrapper');


    menuBtn.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav--active');

        if (isOpen) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
            headerWrapper.classList.add('menu-open');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
            headerWrapper.classList.remove('menu-open');
        }
    });
});

// First Page Video

function getVideoId(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.searchParams.get('v');
    } catch (e) {
        console.error('Invalid video URL:', url);
        return null;
    }
}

function setupFirstPageVideo(container) {
    const img = container.querySelector('img');
    const button = container.querySelector('.play-button--white');
    const iframeWrapper = container.querySelector('.iframe-wrapper');
    const videoLink = container.dataset.video;

    if (!button || !iframeWrapper || !videoLink) return;

    const videoId = getVideoId(videoLink);


    button.addEventListener('click', (e) => {
        e.preventDefault();
        img.style.display = 'none';
        button.style.display = 'none';
        iframeWrapper.classList.remove('.hidden');

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allow', ' autoplay; encrypted-media');
        iframe.setAttribute('allowfullscreen', '');
        iframeWrapper.appendChild(iframe);
    });
}

document.querySelectorAll('.video-preview').forEach(setupFirstPageVideo);

/// Slider

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

    },

    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// Videos

const bigPreview = document.querySelector('.big-video-preview');
const bigImg = bigPreview.querySelector('img');
const smallVideos = document.querySelectorAll('.small-video');
const bigWrapper = document.querySelector('.video--page5 .big-video-wrapper');
const iframeWrapper = bigWrapper.querySelector('.iframe-wrapper');
const playButton = bigPreview.querySelector('.play-button');

function createIframe(videoId) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');
    return iframe;
}

smallVideos.forEach(small => {
    small.addEventListener('click', (event) => {
        event.preventDefault();

        const bigVideoLink = bigPreview.dataset.video;
        const bigVideoImg = bigImg.src;

        const smallVideoLink = small.dataset.video;
        const smallVideoImg = small.querySelector('img').src;

        bigPreview.dataset.video = smallVideoLink;
        bigImg.src = smallVideoImg;
        small.dataset.video = bigVideoLink;
        small.querySelector('img').src = bigVideoImg;

        const videoId = getVideoId(smallVideoLink);

        iframeWrapper.innerHTML = '';
        const newIframe = createIframe(videoId);
        iframeWrapper.appendChild(newIframe);
        iframeWrapper.style.display = 'flex';
        bigImg.style.display = 'none';
        playButton.style.display = 'none';
    });
});

playButton.addEventListener('click', (event) => {
    event.preventDefault();

    const videoId = getVideoId(bigPreview.dataset.video);
    const newIframe = createIframe(videoId);

    iframeWrapper.innerHTML = '';
    iframeWrapper.appendChild(newIframe);
    iframeWrapper.style.display = 'flex';
    bigImg.style.display = 'none';
    playButton.style.display = 'none';
});

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

