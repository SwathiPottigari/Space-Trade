var initialData = {
    difficulty: "Easy",
    isWon: false,
    planets: [{
        id: 1,
        // **Cat-a-stropohic Chaos** //
        resources: [{
            resName: "Food",
            resCount: 5,
            resValue: 20
            },
            {
            resName: "Medicine",
            resCount: 5,
            resValue: 30
            },
            {
            resName: "Entertainment",
            resCount: 5,
            resValue: 20
            },
            {
            resName: "Technology",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Water",
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
            resName: "Food",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Medicine",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Entertainment",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Technology",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Water",
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
            resName: "Food",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Medicine",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Entertainment",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Technology",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Water",
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
            resName: "Food",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Medicine",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Entertainment",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Technology",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Water",
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
            resName: "Food",
            resCount: 5,
            resValue: 10
            },
            {
            resName:"Medicine",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Entertainment",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Technology",
            resCount: 5,
            resValue: 10
            },
            {
            resName: "Water",
            resCount: 5,
            resValue: 10
            }
            ],
    happinessCount: 20,
    isHappy: true
 
    }
    ]};



$('#loginBtn').click(function (event) {
    event.preventDefault();
    var email = $('#email').val();
    var pword = $('#pword').val();
    userName=email;
    userData = {
        email: email,
        password: pword
    };
    $.post("/auth/login", userData)
        .then(function (result) {
            if(result.user){
                window.location="/api/selectDifficulty";
            }
            else{
                alert("Wrong password");
            }
        });
    //"get" the start game page
})

$('#previous').click(function(event){    
    window.location="/api/startPage";
});

$('#new').click(function(event){
    $.post("/api/createInitialGame",initialData).then(function(result){
        window.location="/api/startPage";
    });
});


$('#newAccountBtn').click(function (event) {
   alert("hello");
    event.preventDefault();
    var email = $('#email').val();
    var pword = $('#pword').val();

    //get the start page
    
    userData = {
        email: email,
        password: pword
    };
    $.post("/auth/signup", userData)
        .then(function (result) {
            if(result.hasOwnProperty('id')){
                $.post("/api/createInitialGame",initialData).then(function(result){
                    window.location="/api/startPage";
                });
            }
            else{
                alert("Already a member");
            }
        });
})




