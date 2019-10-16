// Global variables
var gameLoadData = {};

// Loads play area to browser
$(document).ready(function () {
  console.log("play area loaded");
  loadPage();
});

// The page is loaded with the data once it is rendered
function loadPage() {
  $.get("/api/getByUserId").then(function (result) {
    gameLoadData = result;
    mapData(gameLoadData);
  });
};

function calculateHappiness(data) {
  for (var i = 5; i > 0; i--) {
    if (data[i].isHappy === false) {
      return false;
    }
  }
  return true;
}

function mapData(data) {

  var happiness = calculateHappiness(data.planets);
  $("#win-con").text(happiness);
  $(".Progress-main").attr("value",data.planets[0].Resources[5].resCount);
  $('#money').text(data.planets[0].Resources[6].resCount);
  for (var i = 0; i < 5; i++) {
    $("#res-" + i).text(data.planets[0].Resources[i].resName);
    var amountSpan = $("<span>").text(" " + data.planets[0].Resources[i].resCount);
    amountSpan.attr("id",`cargo${data.planets[0].Resources[i].resName}amount`);
    amountSpan.addClass("cargo");
    $("#res-" + i).append(amountSpan);
  }
};

$("#logOut").click(function (event) {
  var gameData = createSaveData(gameLoadData);
  // console.log("this is the data to be saved");
  console.log(gameData);
  $.ajax({
    method: "PUT",
    url: "/api/updateGame",
    // Have to map the original data into it
    data: gameData
  })
    .then(function (result) {
      window.location = "/";
    });
});

function createSaveData(data) {
  var planetsData = {
    id: data.game.id,
    difficulty: data.game.difficulty,
    isWon: data.game.isWon,
    planets: updatePlanets()
  }
  function updatePlanets() {
    var planetsArray=[];
    for (var i = 0; i < data.planets.length; i++) {
      var obj = {
        id:data.planets[i].PlanetId,
        resources:mapResources(data.planets[i].Resources),
        happinessCount:data.planets[i].happinessCount,
        isHappy:data.planets[i].isHappy
      }
      planetsArray.push(obj);
    }
    return planetsArray;
  } 

  return planetsData;
};

function mapResources(resources){
  var array=[];
  for (var i = 0; i < resources.length; i++) {
    var obj = {
      resName: resources[i].resName,
      resCount: resources[i].resCount,
      resValue: resources[i].resValue
    }
    array.push(obj);
}
return array;
};