class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);     /* Hacemos permanente el this a la instancia del objeto */
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    
    run(player) {
        this.player = player;
                                                  // se envia el handle y config
        const observer = new IntersectionObserver(this.handleIntersection,  {
            threshold: this.threshold     /* Umbral */
        });

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handleVisibilityChange)
    }

    handleIntersection(entries) {
        const entry = entries[0];

        const isVisible = entry.intersectionRatio >= this.threshold;

        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }

        // console.log(entry);

    }

    handleVisibilityChange() {
        const isVisible = document.visibilityState === "visible"
        if (isVisible) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;