document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.getElementById('play-button');
    const audio = document.getElementById('background-music');

    playButton.addEventListener('click', () => {
        audio.muted = false;
        audio.play().catch(error => {
            console.error("Audio play was prevented:", error);
        });
    });
});
