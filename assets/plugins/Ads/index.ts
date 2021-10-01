import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './Ads';

class AdsPlugin {
  private ads: Ads;
  private player: MediaPlayer;
  private media: HTMLMediaElement;
  private currentAd: Ad;
  private adsContainer: HTMLElement;

  constructor() {
    this.ads = Ads.getInstance();   /* Es singleton, por lo tanto no hay constructor público, para eso utilizamos el método getInstance() */
    this.adsContainer = document.createElement('div');    /* Contenedor con todos los ads que vamos a añadir y ese contenedor a su vez estará dentro del contenedor del MediaPlayer */
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);   /* Ya que utiliza otro this, lo guardamos con bind() */
  }

  run(player: MediaPlayer) {    /* Todos los plugins tienen un método público llamado run */
    this.player = player;
    this.player.container.appendChild(this.adsContainer);
    this.media = this.player.media;
    this.media.addEventListener('timeupdate', this.handleTimeUpdate);   /* timeupdate; cada vez que pasa un tiempo anuncia que cambio el tiempo, se lo utiliza para realizar diferentes acciones */
  }

  private handleTimeUpdate() {
    const currentTime = Math.floor(this.media.currentTime);   /* Math.floor; le quita los decimales y nos queda el valor entero */
    if (currentTime % 30 === 0) {
      this.renderAd();
    }
  }

  private renderAd() {
    if (this.currentAd) {   /* Si tenemos un ad ya no mostramos otro */
      return;
    }

    const ad = this.ads.getAd();
    this.currentAd = ad;
    // console.log(this.currentAd);

    this.adsContainer.innerHTML = `
      <div class="ads">
        <a class="ads__link" href="${this.currentAd.url}" target="_blank">
          <img class="ads__img" src="${this.currentAd.imageUrl}" />
          <div class="ads__info">
            <h5 class="ads__title">${this.currentAd.title}</h5>
            <p class="ads__body">${this.currentAd.body}</p>
          </div>
        </a>
      </div>
    `;    /* Rellenamos el div vacio que creamos para los ads */

    setTimeout(() => {
      this.currentAd = null;    /* En cierto tiempo toma el currentAd y lo vuelve null */
      this.adsContainer.innerHTML = '';   /* El HTML interno lo vacia de adsContainer */
    }, 10000);
  }
}

export default AdsPlugin;
