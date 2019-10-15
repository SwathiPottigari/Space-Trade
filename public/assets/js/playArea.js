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
    $.ajax({
                method: "PUT",
                url: "/api/updateGame",
                // Have to map the original data into it
                data: initialData
              })
                .then(function(result) {
                  window.location="/";
                });
});
