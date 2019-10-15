$('#loginBtn').click(function (event) {
    event.preventDefault();
    var email = $('#email').val();
    var pword = $('#pword').val();
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
    alert("Hellos");
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
                window.location="/api/selectDifficulty";
            }
            else{
                alert("Already a member");
            }
        });
})