// import { finished } from "stream";

// Create five planets to be displayed in the play area
//
// For testing the api call
// $("#test").click(function () {
//     var data = {
//         name: "Test33",
//         difficulty: "Easy",
//         isWon: false,
//         planets: [
//             {
//              id: planetONE
//              // **Cat-a-stropohic Chaos** //
//              name: Cat-a-stropohic Chaos ,
//              resources: [{
//                     resID: 1,
//                     resName: Food,
//                     resCount: 5,
//
//                     resID: 2,
//                     resName: Medicine,
//                     resCount: 5,
//
//                     resID: 3,
//                     resName: Entertainment,
//                     resCount: 5,
//
//                     resID: 4,
//                     resName: Technology,
//                     resCount: 5,
//
//                     resID: 5,
//                     resName: Water,
//                     resCount: 5,
//                     },
//                 happinessCount: 20,
//                 isHappy: true,
//                 },
//                 uniqueGIVE: "Space Catnip",
//                 uniqueGET: "Space Fertilizer",
//                 },
//                 
//  // ============================================================
//
//                 {
//                 id: planetTWO,
//                 // **Deja-Moo** //
//              id: planetTWO
//              name: Deja-Moo,
//              resources: [{
//    
//                     resName: Food,
//                     resCount: 5,
//
//                     resID: 2,
//                     resName: Medicine,
//                     resCount: 5,
//
//                     resName: Entertainment,
//                     resCount: 5,
//
//                     resName: Technology,
//                     resCount: 5,
//
//                     resName: Water,
//                     resCount: 5,
//                     };, 
//                 ],
//                 happinessCount: 20,
//                 isHappy: true
//                 },
//                 uniqueGIVE: "Space Fertilizer",
//                 uniqueGET: "Space Technology",
//                 },
//
// =======================================================
//
//                      {
//                  id: planetTHREE
//                  // **Hue-Manatee** //
//                  name: Hue-Manatee ,
//                  resources: [{
//
//                     resName: Food,
//                     resCount: 5,
//    
//                     resName: Medicine,
//                     resCount: 5,
//    
//                     resName: Entertainment,
//                     resCount: 5,
//    
//                     resName: Technology,
//                     resCount: 5,
//    
//                     resName: Water,
//                     resCount: 5,
//                     }, 
//                 ],
//                 happinessCount: 20,
//                 isHappy: true
//                 },
//                 uniqueGIVE: "Space Technology",
//                 uniqueGET: "Space Catnip",
//                 },
//
// //=======================================================
//
//                      {
//                  id: planetFOUR
//                  // **Dumble-dope** //
//                  name: Dumble-dope ,
//                  resources: [{
//
//                     resName: Food,
//                     resCount: 5,
//        
//
//                     resName: Medicine,
//                     resCount: 5,
//        
//                     resName: Entertainment,
//                     resCount: 5,
//        
//                     resName: Technology,
//                     resCount: 5,
//        
//                     resName: Water,
//                     resCount: 5,
//                     }, 
//                 ],
//                 happinessCount: 20,
//                 isHappy: true
//                 },
//                 uniqueGIVE: "Space Crystals",
//                 uniqueGET: "Space Snowcones",
//                 },
//
// =======================================================
//
//                      {
//                  id: planetFIVE
//                  // **Ice-olated** //
//                  name: Ice-olated ,
//                  resources: [{
//
//                     resName: Food,
//                     resCount: 5,
//        
//                     resName: Medicine,
//                     resCount: 5,
//        
//                     resName: Entertainment,
//                     resCount: 5,
//        
//                     resName: Technology,
//                     resCount: 5,
//        
//                     resName: Water,
//                     resCount: 5,
//                     }, 
//                 ],
//                 happinessCount: 20,
//                 isHappy: true
//                 },
//                 uniqueGIVE: "Space Crystals",
//                 uniqueGET: "Space Snowcones",
//                 },
//                 uniqueGIVE: "Space Snowcones",
//                 uniqueGET: "Space Crystals",
//                 },
//
// ==========================================================================
//     };
//     saveGame(data);

// To test to get  the data by Id
//    var data="Test";
//     getById(data);
// });

// function saveGame(authorData) {
//     $.post("/api/getInitialGame", authorData)
//         .then(function (result) {
//             alert(result);
//             getById(result);
//         });
// }
// function getById(authorData) {
//     $.get("/api/getByUserId/"+authorData)
//         .then(function (result) {
//             console.log(result);
//             alert(result);
//         });
// }

// Loads play area to browser

$(document).ready(function () {
    console.log("play area loaded");
    drawShip();
    drawPlanet1();
    drawPlanet2();
    drawPlanet3();
    drawPlanet4();
    drawPlanet5();
});

// Create space ship game piece

function drawShip() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
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
};


// Move ship using arrow keys



// Create five planets to be displayed in the play area

// Planet 1
function drawPlanet1() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
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
    };
};

// Planet 2
function drawPlanet2() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
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
    };
};

// Planet 3
function drawPlanet3() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
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
    };
};

// Planet 4
function drawPlanet4() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
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
    };
};

// Planet 5
function drawPlanet5() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
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
    };
};