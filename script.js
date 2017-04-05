var audio = new Audio('music.mp3')


document.querySelector('.play-audio').addEventListener('click', function() {
    audio.play();
}, false);

document.querySelector('.pause-audio').addEventListener('click', function() {
    audio.pause();
}, false);

document.querySelector('.stop-audio').addEventListener('click', function() {
    audio.pause();
    audio.currentTime = 0;
}, false);


// http://stackoverflow.com/questions/7451508/html5-audio-playback-with-fade-in-and-fade-out

function fadeOutAudio() {

    var fadeAudio = setInterval(function () {

        if (audio.volume.toFixed(1) > 0.0) {
            audio.volume -= 0.1;
        }

        if (parseFloat(audio.volume.toFixed(1)) === 0) {
            clearInterval(fadeAudio);
            audio.pause()
        }

    }, 200);

}

function fadeInAudio() {
    var fadeAudio = setInterval(function () {

        audio.play()

        if (audio.volume.toFixed(1) < 1) {
            audio.volume += 0.1;    
        }

        if (parseFloat(audio.volume.toFixed(1)) === 1) {
            clearInterval(fadeAudio);
        }


    }, 100);
}


document.querySelector('.fade-out-audio').addEventListener('click', function() {
    fadeOutAudio();
}, false);

document.querySelector('.fade-in-audio').addEventListener('click', function() {
    fadeInAudio();
}, false);