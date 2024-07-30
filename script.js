document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('backgroundMusic');
    const speakerIcon = document.getElementById('speakerIcon');

    // Play/Pause functionality for the audio when the speaker icon is clicked
    speakerIcon.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            speakerIcon.src = 'speaker-icon-muted.webp'; // Change to the playing icon if available
        } else {
            audio.pause();
            speakerIcon.src = 'speaker-icon-muted.webp'; // Change to the muted icon if available
        }
    });
});