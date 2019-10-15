$('#loginBtn').click(function (event) {
    event.preventDefault();
    var email = $('#email').val();
    var pword = $('#pword').val();
    userName = email;
    userData = {
        email: email,
        password: pword
    };
    $.post("/auth/login", userData)
        .then(function (result) {
            if (result.user) {
                window.location = "/api/selectDifficulty";
            } else {
                alert("Wrong password");
            }
        });
    //"get" the start game page
})

// ==========================================================
// **SEQUELIZE PLANET DATA** //
import {
    finished
} from "stream";

$("#test").click(function () {
    var data = {
        name: "Test33",
        difficulty: "Easy",
        isWon: false,
        planets: [{
            id: planetONE,
            // **Cat-a-stropohic Chaos** //
            name: "Cat-a-stropohic Chaos",
            resources: [{
                resName: Food,
                resCount: 5,
                resValue: 20,
                },
                {
                resName: Medicine,
                resCount: 5,
                resValue: 30,
                },
                {
                resName: Entertainment,
                resCount: 5,
                resValue: 20
                },
                {
                resName: Technology,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Water,
                resCount: 5,
                resValue: 10,
                },
                ],
            happinessCount: 20,
            isHappy: true,
            uniqueGIVE: "Space Catnip",
            uniqueGET: "Space Fertilizer",
            },

        // ============================================================

            {
            id: planetTWO,
            // **Deja-Moo** //
            name: "Deja-Moo",
            resources: [{
                resName: Food,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Medicine,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Entertainment,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Technology,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Water,
                resCount: 5,
                resValue: 10,
                },
                ],
            happinessCount: 20,
            isHappy: true,
            uniqueGIVE: "Space Fertilizer",
            uniqueGET: "Space Technology",
            },

    // =======================================================

            {
           id: planetTHREE,
            // **Hue-Manatee** //
            name: "Hue-Manatee",
            resources: [{
                resName: Food,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Medicine,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Entertainment,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Technology,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Water,
                resCount: 5,
                resValue: 10,
                },
                ],
            happinessCount: 20,
            isHappy: true,
            uniqueGIVE: "Space Technology",
            uniqueGET: "Space Catnip",
            },

    //=======================================================

        {
        id: planetFOUR,
            // **Dumble-dope** //
            name: "Dumble-dope",
            resources: [{
                resName: Food,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Medicine,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Entertainment,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Technology,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Water,
                resCount: 5,
                resValue: 10,
                },
                ],
        happinessCount: 20,
        isHappy: true,
        uniqueGIVE: "Space Crystals",
        uniqueGET: "Space Snowcones",
        },

    // =======================================================

        {
        id: planetFIVE,
            // **Ice-olated** //
            name: "Ice-olated",
            resources: [{
                resName: Food,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Medicine,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Entertainment,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Technology,
                resCount: 5,
                resValue: 10,
                },
                {
                resName: Water,
                resCount: 5,
                resValue: 10,
                },
                ],
        happinessCount: 20,
        isHappy: true,
        uniqueGIVE: "Space Snowcones",
        uniqueGET: "Space Crystals",
        }
        ]}

    // ==========================================================================

saveGame(data)

// To test to get the data by Id
var data = "Test";
getById(data);
});

function saveGame(authorData) {
    $.post("/api/getInitialGame", authorData)
        .then(function (result) {
            alert(result);
            getById(result);
        });
}

function getById(authorData) {
    $.get("/api/getByUserId/" + authorData)
        .then(function (result) {
            console.log(result);
            alert(result);
        });
}

// Loads play area to browser
//  // ============================================================================

// $('#previous').click(function (event) {
//     alert("Hello")
//     $.get("/api/getByUserId").then(function (result) {
//         console.log(result);
//     });
// });


// $('#newAccountBtn').click(function (event) {

//     event.preventDefault();
//     var email = $('#email').val();
//     var pword = $('#pword').val();

//     //get the start page

//     userData = {
//         email: email,
//         password: pword
//     };
//     $.post("/auth/signup", userData)
//         .then(function (result) {
//             if (result.hasOwnProperty('id')) {
//                 window.location = "/api/selectDifficulty";
//             } else {
//                 alert("Already a member");
//             }
//         });
// })