// import { finished } from "stream";

// Create five planets to be displayed in the play area


// For testing the api call
// $("#test").click(function () {
//     var data = {
//         name: "Test",
//         difficulty: "Easy",
//         isWon: false,
//         planets: [
//             {
//                 id: 1,
//                 resources: [{
//                     id:20,
//                     resName:"fish",
//                     count: 10
//                 }, {
//                     id:30,
//                     resName:"fish",
//                     count: 20
//                 }
//                 ],
//                 happinessCount: 20,
//                 isHappy: true
//             },
//             {
//                 id: 5,
//                 resources: [{
//                     id:20,
//                     resName:"choc",
//                     count: 30
//                 },
//                 {
//                     id:20,
//                     resName:"choc",
//                     count: 40
//                 }
//                 ],
//                 happinessCount: 30,
//                 isHappy: false,
//             },
//             {
//                 id: 2,
//                 resources: [{
//                     id:20,
//                     resName:"water",
//                     count: 50
//                 },
//                 {
//                     id:20,
//                     resName:"water",
//                     count: 60
//                 }
//                 ],
//                 happinessCount: 30,
//                 isHappy: true,
//             },
//             {
//                 id: 3,
//                 resources: [{
//                     id:20,
//                     resName:"ice",
//                     count: 70
//                 },
//                 {
//                     id:20,
//                     resName:"ice",
//                     count: 80
//                 }
//                 ],
//                 happinessCount: 80,
//                 isHappy: true,
//             }
//         ],
        
//     };
//     saveGame(data);

//     // To test to get  the data by Id
// //    var data="Test";
// //     getById(data);
// });

// function saveGame(authorData) {
//     $.post("/api/getInitialGame", authorData)
//         .then(function (result) {
//             alert("done");
//         });
// }
// function getById(authorData) {
//     $.get("/api/getByUserId/"+authorData)
//         .then(function (result) {
//             console.log(result);
//             alert(result);
//         });
// }

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
