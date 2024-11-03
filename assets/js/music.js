const audio = document.getElementById('background-music');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');

// Fungsi untuk Play
function playMusic() {
    audio.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
}

// Fungsi untuk Pause
function pauseMusic() {
    audio.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
}

// Event listener untuk tombol Play dan Pause
playBtn.addEventListener('click', playMusic);
pauseBtn.addEventListener('click', pauseMusic);
