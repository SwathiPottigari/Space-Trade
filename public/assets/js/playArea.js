// Create the general play area using a canvas

$(document).ready(function() {
    startGame();
});

function startGame() {
    playArea.start();
}

var playArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 960;
        this.canvas.height = 540;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

// Create five planets to be displayed in the play area