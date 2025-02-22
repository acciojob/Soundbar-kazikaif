//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        stopAllSounds();
        const sound = new Audio(`./sounds/${button.dataset.sound}.mp3`);
        sound.play();
        button.currentSound = sound;
    });
});

stopButton.addEventListener('click', stopAllSounds);

function stopAllSounds() {
    buttons.forEach(button => {
        if (button.currentSound) {
            button.currentSound.pause();
            button.currentSound.currentTime = 0;
        }
    });
}
