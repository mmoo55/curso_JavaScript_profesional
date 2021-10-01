// Para importar variables
// import MediaPlayer, { foo } from './MediaPlayer.js';

import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
// Para importar el archivo ts
/* import AutoPause from './plugins/AutoPause.ts'; */


// querySelector, devuelve el primer elemento que coincida
const video = document.querySelector('video')
// Instanciamos al objeto MediaPlayer
const player = new MediaPlayer({
    el: video, plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
});

// const button = document.querySelector('button')
const button: HTMLElement = document.querySelector('#playPause')
// button.onclick = () => player.play();
button.onclick = () => player.togglePlay()

const muteUnmute: HTMLElement = document.querySelector('#muteUnmute')
muteUnmute.onclick = () => player.toggleMute()

/* const muteUnmute = document.querySelector('#muteUnmute')
muteUnmute.onclick = () => {
    if (player.media.muted) {
        player.unmute();
    } else {
        player.mute();
    }
}; */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}