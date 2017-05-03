Ambienx (BackgroundMusic.js)
==========

```js
var newAmbienx = new Ambienx({
    audioSrc: 'music.mp3',
    audioLoop: false,
    autoPlay: false,
    enabledLoseFocus: true
});
```

## Play
```js
document.querySelector('.play-audio').addEventListener('click', function() {
    newAmbienx.playAudio();
}, false);
```


## Pause
```js
document.querySelector('.pause-audio').addEventListener('click', function() {
    newAmbienx.pauseAudio();
}, false);
```

## Stop
```js
document.querySelector('.stop-audio').addEventListener('click', function() {
    newAmbienx.pauseAudio({stop: true});
}, false);
```

## Fade In
This method accepts an integer argument (1-10), which controls the target fade volume.

```js
document.querySelector('.fade-in-audio').addEventListener('click', function() {
    newAmbienx.fadeInAudio(1, function() {
        <!-- execute callback code here -->
    });
}, false);
```

## Fade Out
This method accepts an integer argument (1-10), which controls the target fade volume. If the target fade volume is not 0, then the audio will keep playing.
```js
document.querySelector('.fade-out-audio').addEventListener('click', function() {
    newAmbienx.fadeOutAudio(0, function() {
        <!-- execute callback code here -->
    });
}, false);
```

## Toggle Fade
This method accepts an argument that is an object, which controls the fade in and fade out volume.
```js
document.querySelector('.toggle-fade-audio').addEventListener('click', function() {
    newAmbienx.toggleFadeAudio({
        fadeInVolume: 1,
        fadeOutVolume: 0
    });
}, false);
```