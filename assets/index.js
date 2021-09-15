// querySelector, devuelve el primer elemento que coincida
const video = document.querySelector('video')
const button = document.querySelector('button')

// la funcion prototipo que recibe el objeto config
function MediaPlayer(config) {
  this.media = config.el;
}

// prototype, agrega al objeto ya creado
// le asicgnamos la función play
MediaPlayer.prototype.play = function() {
  if (this.media.paused) {  // Verificamos el estado del video para la opción play o pausa
    this.media.play();
  } else {
    this.media.pause();
  }

  // o podemos usar lo siguiente:
  // this.media.paused ? this.media.play() : this.media.pause()
};

// Instanciamos al objeto MediaPlayer
const player = new MediaPlayer({ el: video });

button.onclick = () => player.play();