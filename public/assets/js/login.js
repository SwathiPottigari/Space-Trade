var initialData = {
    difficulty: "Hard",
    isWon: false,
    planets: [
        {
            id: 1,
            resources: [{
                 resValue:20,
                resName:"fish",
                resCount: 10
            }, {
                id:30,
                resName:"fish",
                resCount: 20
            }
            ],
            happinessCount: 20,
            isHappy: true
        },
        {
            id: 4,
            resources: [{
                id:20,
                resName:"choc",
                resCount: 30
            },
            {
                id:20,
                resName:"choc",
                resCount: 40
            }
            ],
            happinessCount: 30,
            isHappy: false,
        },
        {
            id: 2,
            resources: [{
                id:20,
                resName:"water",
                resCount: 50
            },
            {
                id:20,
                resName:"water",
                resCount: 60
            }
            ],
            happinessCount: 30,
            isHappy: true,
        },
        {
            id: 3,
            resources: [{
                id:20,
                resName:"ice",
                resCount: 70
            },
            {
                id:20,
                resName:"ice",
                resCount: 80
            }
            ],
            happinessCount: 80,
            isHappy: true,
        }
    ],
    
}

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
                window.location="/api/startPage";
            }
            else{
                alert("Already a member");
            }
        });
})