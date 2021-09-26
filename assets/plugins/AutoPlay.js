function AutoPlay() {}
AutoPlay.prototype.run = function(player) {
    if (!player.muted) {
        // Setters no se llaman como si fueran una función simplemente son un valor virtual, que se asigna un valor
        player.muted = true;
    }

    player.play();
}


export default AutoPlay;