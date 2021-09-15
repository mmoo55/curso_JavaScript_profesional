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

export default MediaPlayer;

// Para exportar variables
// export const foo = 'bar';