import MediaPlayer from './MediaPlayer.js';

// Para importar variables
// import MediaPlayer, { foo } from './MediaPlayer.js';


// querySelector, devuelve el primer elemento que coincida
const video = document.querySelector('video')
// Instanciamos al objeto MediaPlayer
const player = new MediaPlayer({ el: video });

const button = document.querySelector('button')
button.onclick = () => player.play();