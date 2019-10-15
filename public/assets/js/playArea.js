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
