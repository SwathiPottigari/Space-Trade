var initialData = {
    difficulty: "Easy",
    isWon: false,
    planets: [{
        id: 1,
        // **Cat-a-stropohic Chaos** //
        resources: [{
            resName: Food,
            resCount: 5,
            resValue: 20
            },
            {
            resName: Medicine,
            resCount: 5,
            resValue: 30
            },
            {
            resName: Entertainment,
            resCount: 5,
            resValue: 20
            },
            {
            resName: Technology,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Water,
            resCount: 5,
            resValue: 10
            }
            ],
        happinessCount: 20,
        isHappy: true

        },

    // ============================================================

        {
        id: 2,
        // **Deja-Moo** //
        
        resources: [{
            resName: Food,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Medicine,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Entertainment,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Technology,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Water,
            resCount: 5,
            resValue: 10
            }
            ],
        happinessCount: 20,
        isHappy: true
      
        },

// =======================================================

        {
       id: 3,
        // **Hue-Manatee** //
        
        resources: [{
            resName: Food,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Medicine,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Entertainment,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Technology,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Water,
            resCount: 5,
            resValue: 10
            }
            ],
        happinessCount: 20,
        isHappy: true
        
        },

//=======================================================

    {
    id: 4,
        // **Dumble-dope** //
        
        resources: [{
            resName: Food,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Medicine,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Entertainment,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Technology,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Water,
            resCount: 5,
            resValue: 10
            }
            ],
    happinessCount: 20,
    isHappy: true
    
    },

// =======================================================

    {
    id: 5,
        // **Ice-olated** //
       
        resources: [{
            resName: Food,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Medicine,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Entertainment,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Technology,
            resCount: 5,
            resValue: 10
            },
            {
            resName: Water,
            resCount: 5,
            resValue: 10
            }
            ],
    happinessCount: 20,
    isHappy: true
 
    }
    ]};


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
