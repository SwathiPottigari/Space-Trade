// Global variables
var gameLoadData = {};

// Loads play area to browser
$(document).ready(function () {
    console.log("play area loaded");
    loadPage();
});

// The page is loaded with the data once it is rendered
function loadPage(){
    $.get("/api/getByUserId").then(function(result){  
        gameLoadData = result;
        mapData(gameLoadData);
    });
};

function calculateHappiness(data) {
  for (var i = 0; i < 0; i++) {
    if (data[i].isHappy===false) {
      return false;
    }
  }
  return true;
}

function mapData(data) {
  
  var happiness = calculateHappiness(data.planets);

  $("#win-con").text(happiness);
  $("#res-0").text(data.planets[5].Resources[0])

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
