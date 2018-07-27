var video = document.querySelector('.video');

function init() {
    document.querySelector('.play').addEventListener('click', playVideo);
    document.querySelector('.pause').addEventListener('click', pauseVideo);
}

function playVideo() {
    if (video.classList.contains('playing')) {
        video.pause();
        video.classList.remove('playing');
    } else {
        video.play();
        video.classList.add('playing');
    }
}

function pauseVideo() {
    if (video.classList.contains('paused')) {
        video.play();
        video.classList.remove('paused');
    } else {
        video.pause();
        video.classList.add('paused');
    }
}

window.addEventListener('load', init);