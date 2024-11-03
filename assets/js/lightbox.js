const images = document.querySelectorAll('.gallery-item img, .gallery-item-2 img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function openLightbox(index) {
    lightbox.style.display = 'flex';
    lightboxImg.src = images[index].getAttribute('data-full'); 
    currentIndex = index;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    lightboxImg.src = images[currentIndex].getAttribute('data-full');
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = images[currentIndex].getAttribute('data-full');
}

images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
});

closeBtn.addEventListener('click', closeLightbox);

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevImage();
});

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextImage();
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightboxImg) return;
    closeLightbox();
});
