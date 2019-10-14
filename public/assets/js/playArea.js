$(document).ready(function () {
    console.log("game loaded")
    canvasSpaceGame();
})

// Global variables 
var shipX = 0; // X position of ship 
var shipY = 0; // Y position of ship 
var canvas; // canvas 
var ctx; // context 
var back = new Image(); // storage for new background piece 
var oldBack = new Image(); // storage for old background piece 
var ship = new Image(); // ship 
var shipX = 460; // current ship position X 
var shipY = 170; // current ship position Y 
var oldShipX = 0; // old ship position Y 
var oldShipY = 0; // old ship position Y 
// This function is called on page load. 


function canvasSpaceGame() {

    // Get the canvas element. 
    canvas = document.getElementById("myCanvas");

    // Make sure you got it. 
    if (canvas.getContext)

    // If you have it, create a canvas user interface element. 
    {
        // Specify 2d canvas type. 
        ctx = canvas.getContext("2d");

        // Paint it black. 
        ctx.fillStyle = "black";
        ctx.rect(0, 0, 960, 540);
        ctx.fill();

        // Save the initial background. 
        back = ctx.getImageData(0, 0, 30, 30);

        // Paint the starfield. 
        stars();

        // Draw the planets.
        drawPlanet1();
        drawPlanet2();
        drawPlanet3();
        drawPlanet4();
        drawPlanet5();

        // Draw space ship. 
        makeShip();
    }

    // Play the game until the until the game is over. 
    gameLoop = setInterval(doGameLoop, 16);

    // Add keyboard listener. 
    window.addEventListener('keydown', whatKey, true);

}

// Paint a random starfield. 
function stars() {

    // Draw stars. 
    for (i = 0; i <= 500; i++) {
        // Get random positions for stars. 
        var x = Math.floor(Math.random() * 959);
        var y = Math.floor(Math.random() * 539);

        // Make the stars white 
        ctx.fillStyle = "white";

        // Give the ship some room by painting black stars. 
        if (x < 30 || y < 30) ctx.fillStyle = "black";

        // Draw an individual star. 
        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        // Save black background. 
        oldBack = ctx.getImageData(0, 0, 30, 30);
    }
}

// Planet 1
function drawPlanet1() {
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/thumb/0ad802cc8e094bc.png';
    img.onload = function () {
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(100, 100, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // Save black background. 
        oldBack = ctx.getImageData(0, 0, 30, 30);
    };
};

// Planet 2
function drawPlanet2() {
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/thumb/89e2640b5351c53.png';
    img.onload = function () {
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(850, 100, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // Save black background. 
        oldBack = ctx.getImageData(0, 0, 30, 30);
    };
};

// Planet 3
function drawPlanet3() {
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/thumb/248848f0a2e9b95.png';
    img.onload = function () {
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(475, 270, 70, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // Save black background. 
        oldBack = ctx.getImageData(0, 0, 30, 30);
    };
};

// Planet 4
function drawPlanet4() {
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/thumb/4e5dd828ad85087.png';
    img.onload = function () {
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(100, 440, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // Save black background. 
        oldBack = ctx.getImageData(0, 0, 30, 30);
    };
};

// Planet 5
function drawPlanet5() {
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/d54aecfdf01cf9c.png';
    img.onload = function () {
        var ptrn = ctx.createPattern(img, 'repeat');
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(850, 440, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();

        // Save black background. 
        oldBack = ctx.getImageData(0, 0, 30, 30);
    };
};

function makeShip() {

    // Draw saucer bottom. 
    ctx.beginPath();
    ctx.moveTo(28.4, 16.9);
    ctx.bezierCurveTo(28.4, 19.7, 22.9, 22.0, 16.0, 22.0);
    ctx.bezierCurveTo(9.1, 22.0, 3.6, 19.7, 3.6, 16.9);
    ctx.bezierCurveTo(3.6, 14.1, 9.1, 11.8, 16.0, 11.8);
    ctx.bezierCurveTo(22.9, 11.8, 28.4, 14.1, 28.4, 16.9);
    ctx.closePath();
    ctx.fillStyle = "salmon";
    ctx.fill();

    // Draw saucer top. 
    ctx.beginPath();
    ctx.moveTo(22.3, 12.0);
    ctx.bezierCurveTo(22.3, 13.3, 19.4, 14.3, 15.9, 14.3);
    ctx.bezierCurveTo(12.4, 14.3, 9.6, 13.3, 9.6, 12.0);
    ctx.bezierCurveTo(9.6, 10.8, 12.4, 9.7, 15.9, 9.7);
    ctx.bezierCurveTo(19.4, 9.7, 22.3, 10.8, 22.3, 12.0);
    ctx.closePath();
    ctx.fillStyle = "aquamarine";
    ctx.fill();

    // Save ship data. 
    ship = ctx.getImageData(0, 0, 30, 30);

    // Erase it for now. 
    ctx.putImageData(oldBack, 0, 0);

}

function doGameLoop() {

    // Put old background down to erase ship. 
    ctx.putImageData(oldBack, oldShipX, oldShipY);

    // Put ship in new position. 
    ctx.putImageData(ship, shipX, shipY);

}

// Get key press. 


function whatKey(evt) {

    // Flag to put variables back if we hit an edge of the board. 
    var flag = 0;

    // Get where the ship was before key process. 
    oldShipX = shipX;
    oldShipY = shipY;
    oldBack = back;

    switch (evt.keyCode) {

        // Left arrow. 
        case 37:
            shipX = shipX - 30;
            if (shipX < 0) {
                // If at edge, reset ship position and set flag. 
                shipX = 0;
                flag = 1;
            }
            break;

        // Right arrow. 
        case 39:
            shipX = shipX + 30;
            if (shipX > 940) {
                // If at edge, reset ship position and set flag. 
                shipX = 940;
                flag = 1;
            }
            break;

        // Down arrow 
        case 40:
            shipY = shipY + 30;
            if (shipY > 520) {
                // If at edge, reset ship position and set flag. 
                shipY = 520;
                flag = 1;
            }
            break;

        // Up arrow  
        case 38:
            shipY = shipY - 30;
            if (shipY < 0) {
                // If at edge, reset ship position and set flag. 
                shipY = 0;
                flag = 1;
            }
            break;

    }

    // If flag is set, the ship did not move. 
    // Put everything back the way it was. 
    if (flag) {
        shipX = oldShipX;
        shipY = oldShipY;
        back = oldBack;
    } else {
        // Otherwise, get background where the ship will go 
        // So you can redraw background when the ship 
        // moves again. 
        back = ctx.getImageData(shipX, shipY, 30, 30);
    }
}