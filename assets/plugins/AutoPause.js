class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this);     /* Hacemos permanente el this a la instancia del objeto */
    }
    
    run(player) {
        this.player = player;
                                                                            // config
        const observer = new IntersectionObserver(this.handlerIntersection,  {
            threshold: this.threshold     /* Umbral */
        });

        observer.observe(this.player.media);
    }

    handlerIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }

        // console.log(entry);

    }
}

export default AutoPause;