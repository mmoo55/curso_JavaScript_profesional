import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './Ads';

class AdsPlugin {
  private ads: Ads;
  private player: MediaPlayer;
  private media: HTMLMediaElement;
  private currentAd: Ad;

  constructor() {
    this.ads = Ads.getInstance();   /* Es singleton, por lo tanto no hay constructor público, para eso utilizamos el método getInstance() */
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);   /* Ya que utiliza otro this, lo guardamos con bind() */
  }

  run(player: MediaPlayer) {    /* Todos los plugins tienen un método público llamado run */
    this.player = player;
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
    console.log(this.currentAd);
  }
}

export default AdsPlugin;
