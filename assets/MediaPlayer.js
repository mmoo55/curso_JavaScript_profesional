// la funcion prototipo que recibe el objeto config
function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];  // || [] Da el valor inicial vacio

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,

        get muted() {
            return this.media.muted;
        },

        set muted(value) {
            this.media.muted = value;
        }
    };

    this.plugins.forEach(plugin => {
        plugin.run(player);
    })
}

// prototype, agrega al objeto ya creado
// le asicgnamos la función play
/* MediaPlayer.prototype.play = function() {
  if (this.media.paused) {  // Verificamos el estado del video para la opción play o pausa
    this.media.play();
  } else {
    this.media.pause();
  }

  // o podemos usar lo siguiente:
  // this.media.paused ? this.media.play() : this.media.pause()
}; */

MediaPlayer.prototype.play = function () {
    this.media.play();
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {  // Verificamos el estado del video para la opción play o pausa
        this.media.play();
    } else {
        this.media.pause();
    }
}

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function () {
    if (this.media.muted) {  // Verificamos el estado del video para la opción mute o unmute
        this.media.muted = false;
    } else {
        this.media.muted = true;
    }
}
// ------Otra forma------
// MediaPlayer.prototype.toggleMute = function () {
//     this.media.muted = !this.media.muted
// }

export default MediaPlayer;

// Para exportar variables
// export const foo = 'bar';