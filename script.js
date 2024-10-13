document.addEventListener('DOMContentLoaded', function () {
    const enableSongLink = document.getElementById('enableSongLink');
    const songs = ['resonating-race-faster.mp3', 'lofibg.mp3']; // Replace with the paths to your audio files
    let audio = null;
    let isPlaying = false;
    let currentSongIndex = 0;

    enableSongLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action of the hyperlink

        if (isPlaying) {
            // If a song is currently playing, stop it
            audio.pause();
            audio.currentTime = 0; // Reset the audio to the start
            isPlaying = false;
        } else {
            // Play the current song
            audio = new Audio(songs[currentSongIndex]);
            audio.play();
            isPlaying = true;

            // Ensure the song does not loop
            audio.loop = false;

            // Add an event listener to handle when the song ends
            audio.addEventListener('ended', function () {
                isPlaying = false;
            });

            // Move to the next song index, looping back to the start if necessary
            currentSongIndex = (currentSongIndex + 1) % songs.length;
        }
    });
});



function newspage() {
    window.location.href = 'https://lamps-dev.is-a.dev/news';
}

function homepage() {
    window.location.href = 'https://lamps-dev.is-a.dev/home';
}