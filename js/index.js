const keys = document.querySelectorAll(".key");
const negative1 = document.getElementById('letItGoSong');
let  bttn1 = document.getElementById('bttnPlaySong1');

function  playSound(url) {
    new Audio(url).play();
}

keys.forEach((key, i) => {
    const soundNumber = i < 9 ? '0' +(i+1) : (i+1)
    const soundUrl = 'sounds/key' +  soundNumber + '.mp3';
    key.addEventListener('click', ()  => playSound(soundUrl));
})
function toggleAudio() {
    if(negative1.paused) {
        negative1.play();
        bttn1.classList.add('isActive');
        
    }else {
        negative1.pause();
        bttn1.classList.remove('isActive');
    }
}

