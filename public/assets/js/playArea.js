var initialData = {
    id:5,
    difficulty: "Easy",
    isWon: true,
    planets: [
        {
            id: 1,
            resources: [{
                 resValue:20,
                resName:"fish",
                resCount: 100
            }, {
                
                resName:"fish",
                resCount: 100
            }
            ],
            happinessCount: 0,
            isHappy: true
        },
        {
            id: 4,
            resources: [{
                id:20,
                resName:"choc",
                resCount: 100
            },
            {
                id:20,
                resName:"choc",
                resCount: 100
            }
            ],
            happinessCount: 0,
            isHappy: false,
        },
        {
            id: 2,
            resources: [{
                id:20,
                resName:"water",
                resCount: 100
            },
            {
                id:20,
                resName:"water",
                resCount: 100
            }
            ],
            happinessCount: 0,
            isHappy: true,
        },
        {
            id: 3,
            resources: [{
                id:20,
                resName:"ice",
                resCount: 100
            },
            {
                id:20,
                resName:"ice",
                resCount: 100
            }
            ],
            happinessCount: 0,
            isHappy: true,
        }
    ],
    
}

// Loads play area to browser

$(document).ready(function () {
    console.log("play area loaded");
    loadPage();
});

// The page is loaded with the data once it is rendered
function loadPage(){
    $.get("/api/getByUserId").then(function(result){
        console.log("This is the data loaded");
        console.log(result);
    });
};

$("#logOut").click(function(event){
    alert("Clicked logout");
    $.ajax({
                method: "PUT",
                url: "/api/updateGame",
                data: initialData
              })
                .then(function(result) {
                  window.location="/";
                });
});
