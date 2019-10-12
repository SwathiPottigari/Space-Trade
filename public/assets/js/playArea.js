// Create the general play area using a canvas

// $(document).ready(function() {
//     startGame();
// });

// function startGame() {
//     playArea.start();
// }

// var playArea = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 960;
//         this.canvas.height = 540;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//     }
// }

// Create five planets to be displayed in the play area

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(800, 90, 45, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100, 440, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(150, 100, 60, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(460, 260, 70, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(850, 450, 75, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();