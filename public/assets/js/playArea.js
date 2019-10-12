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


// For testing the api call
// $("#test").click(function(){
// var data={
//     name:"Test",
//     difficulty:"Easy",
//     planetId:[
//         {
//             id:1,
//             resources:[{
//                 // id:20,
//                 count:20
//             },{
//                 count:20
//             }
//         ]
//         },
//         {
//             id:5,
//             resources:[{
//                 // id:20,
//                 count:20
//             },
//             {
//                 // id:20,
//                 count:20
//             }
//         ]
//         },
//         {
//             id:2,
//             resources:[{
//                 // id:20,
//                 count:30
//             },
//             {
//                 // id:20,
//                 count:30
//             }
//         ]
//         },
//         {
//             id:3,
//             resources:[{
//                 // id:20,
//                 count:40
//             },
//             {
//                 // id:20,
//                 count:40
//             }
//         ]
//         }
//     ],
//     happinessCount:20,
//     isHappy:true,
//     isWon:false
// };
// alert(data)
// saveGame(data);
// });

// function saveGame(authorData) {
//     $.post("/api/savegame", authorData)
//       .then(function(result){
//           alert("done");
//       });
//   }