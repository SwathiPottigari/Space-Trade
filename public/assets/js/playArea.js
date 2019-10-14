// Create five planets to be displayed in the play area

function drawPlanet1() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/d54aecfdf01cf9c.png';
    img.onload = function () {

        var ptrn = ctx.createPattern(img, 'repeat');
        // Planet 1
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(800, 90, 45, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    };
};

function drawPlanet2() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/8ced160f7c09a76.png';
    img.onload = function () {

        var ptrn = ctx.createPattern(img, 'repeat');
        // Planet 2
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(100, 440, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    };
};

function drawPlanet3() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/7c43c6fb94e4d50.gif';
    img.onload = function () {

        var ptrn = ctx.createPattern(img, 'repeat');
        // Planet 3
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(150, 100, 60, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    };
};

function drawPlanet4() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/thumb/248848f0a2e9b95.png';
    img.onload = function () {

        var ptrn = ctx.createPattern(img, 'repeat');
        // Planet 4
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(460, 260, 70, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    };
};

function drawPlanet5() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // Create new image object to use as pattern
    var img = new Image();
    img.src = 'https://art.pixilart.com/thumb/0ad802cc8e094bc.png';
    img.onload = function () {

        var ptrn = ctx.createPattern(img, 'repeat');
        // Planet 5
        ctx.beginPath();
        ctx.fillStyle = ptrn;
        ctx.arc(850, 450, 75, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    };
};

drawPlanet1();
drawPlanet2();
drawPlanet3();
drawPlanet4();
drawPlanet5();