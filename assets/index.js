// Para importar variables
// import MediaPlayer, { foo } from './MediaPlayer.js';

import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';


// querySelector, devuelve el primer elemento que coincida
const video = document.querySelector('video')
// Instanciamos al objeto MediaPlayer
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] });

const button = document.querySelector('button')
button.onclick = () => player.play();