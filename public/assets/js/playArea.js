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
  for (var i = 5; i >0; i--) {
    if (data[i].isHappy===false) {
      return false;
    }
  }
  return true;
}

function mapData(data) {
  
  var happiness = calculateHappiness(data.planets);
  $("#win-con").text(happiness);
  for(var i=0;i<data.planets[0].Resources.length;i++){
    $("#res-"+i).text(data.planets[0].Resources[i].resName);
  }
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
