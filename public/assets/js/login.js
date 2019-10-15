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

// $("#test").click(function(event){
//     $.ajax({
//         method: "PUT",
//         url: "/api/updateGame",
//         data: initialData
//       })
//         .then(function(result) {
//           console.log(result);
//         });
   
// });

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