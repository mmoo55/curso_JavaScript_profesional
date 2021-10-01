class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  container: HTMLElement;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];
    this.initPlayer();
    this.initPlugins();
  }

  initPlayer() {  /* Inicializamos el player para crear el contenedor de forma dinámica y que quede dentro el video */
    this.container = document.createElement('div');
    this.container.style.position = 'relative';    /* Para poner los ads usaremos posición absoluta para poder ponerlo en la parte de abajo y para eso necesitamos poner posición relativa en el contenedor */
    this.media.parentNode.insertBefore(this.container, this.media);   /* Ubicamos el contenedor como pariente de media */
    this.container.appendChild(this.media);   /* Ya que esté pariente, tomamos el media y lo ponemos dentro */
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  toggleMute() {
    if (this.media.muted) {  // Verificamos el estado del video para la opción mute o unmute
        this.media.muted = false;
    } else {
        this.media.muted = true;
    }
}
}



export default MediaPlayer;