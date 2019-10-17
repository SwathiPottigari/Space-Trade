var planetId;
var happyPlanets = 0;
$(document).ready(function () {
    //get data
    //create modal with data
    //dummy data for development

    var instructionModal = $('#instructionModal');
    instructionModal.modal();


    $(".planet").click(function (event) {
        //get planet data here
        planetId = $(this).attr('id');
        console.log("PlanetID " + planetId)
        var planet = planetData(gameLoadData, planetId);
        gameLoadData.planets[0].Resources[5].resCount--;
        $(".Progress-main").attr("value", gameLoadData.planets[0].Resources[5].resCount--);
        var modal;
        function drawModal(planet) {
            var div = $('#modalHolder');
            modal = $('<div>').addClass("modal trade-modal");
            modal.attr("tabindex", "-1");
            modal.attr("role", "dialog");
            var modalDialog = $('<div>').addClass("modal-content");
            modalDialog.attr("role", "document");
            modal.append(modalDialog);
            var modalContent = $("<div>").addClass("modal-content");
            modalDialog.append(modalContent);
            var modalHeader = $('<h5>').addClass("modal-header");
            modalHeader.text(`Welcome to ${planet.name}, what would you like to trade?`);
            modalContent.append(modalHeader);
            var dismissButton = $('<button>').addClass("close");
            dismissButton.attr("data-dismiss", "modal");
            dismissButton.attr("aria-label", "X");
            var dismissSpan = $('<span>');
            dismissSpan.attr("aria-hidden", "true");
            dismissSpan.text("X")
            dismissButton.append(dismissSpan);
            modalHeader.append(dismissButton);
            var modalBody = $('<div>').addClass("modal-body container t-modal");

            var mainRow = $('<div>').addClass("row");
            var portraitColumn = $('<div>').addClass("col-md-2");
            mainRow.append(portraitColumn);
            // var portrait = $('<img>');
            // portraitColumn.append(portrait);
            var contentColumn = $('<div>').addClass("col-md-10");
            mainRow.append(contentColumn);
            var contentContainer = $('<div>').addClass("container");
            contentColumn.append(contentContainer);



            var table = $('<table>').attr("class", "resTable");
            var headerRow = $('<tr>');
            table.append(headerRow);



            var resourceNameLabel = $('<th>').text("RESOURCE");
            var operation = $("<th>").text("OPERATION");
            var planetAmount = $("<th>").text("QTY");
            var cost = $("<th>").text("COST");

            headerRow.append(resourceNameLabel, operation, planetAmount, cost);
            contentColumn.append(table);

            planet.resources.forEach(resource => {
                console.log(resource);
                var resRow = $('<tr>');
                var resourceName = $('<td>');
                resourceName.text(resource.name);
                resRow.append(resourceName);
                var buttonData = $('<td>');
                var resAddButton = $("<button>");
                resAddButton.text("BUY");
                resAddButton.attr("class", "trade")
                    .attr("data-cost", resource.cost)
                    .attr("data-planet", planetId)
                    .attr("data-id", resource.id)
                    .attr("data-name", resource.name)
                    .attr("data-buy", "true");
                buttonData.append(resAddButton);
                resRow.append(buttonData);
                var resSubButton = $("<button>");
                resSubButton.text("SELL");
                resSubButton.attr("class", "trade")
                    .attr("data-cost", resource.cost)
                    .attr("data-planet", planetId)
                    .attr("data-id", resource.id)
                    .attr("data-name", resource.name)
                    .attr("data-buy", "false");
                buttonData.append(resSubButton);

                var resAmount = $('<td>').text(resource.amount)
                    .attr("data-amount", resource.amount)
                resAmount.attr("class", `${resource.id}amount`);
                var resCost = $('<td>').text(resource.cost);
                resRow.append(resAmount, resCost);

                table.append(resRow);

            });

            modalBody.append(mainRow);
            modalContent.append(modalBody);

            div.append(modal);

        }
        drawModal(planet);
        modal.modal();
    });

    $(document).on('click', '.trade', function (event) {
        // This decreases the fuel level

        var currentId = $(this).attr("data-id");
        var resName = $(this).attr("data-name");
        var cost = parseInt($(this).attr("data-cost"));
        var planetId = parseInt($(this).attr("data-planet"))

        var currentAmount = $(`.${currentId}amount`).attr("data-amount");
        var currentAmountInCargoSpan = $(`#cargo${resName}amount`);
        var moneySpan = $('#money');
        var currentMoney = parseInt(moneySpan.text());


        var currentAmountInCargo = currentAmountInCargoSpan.text();
        //TODO: Need to add the trader's cargo hold, too.



        if ($(this).attr("data-buy") === "true") {
            if (currentAmount > 0 && (currentMoney - cost) > 0) {
                currentAmount--;
                currentMoney -= cost;
                currentAmountInCargo++;
            }
        } else {
            if (currentAmountInCargo > 0) {
                currentAmount++;
                currentMoney += cost;
                currentAmountInCargo--;
                updateHappiness();
            }
        }
        // This updates the resources whenever a trade happens

        function updateHappiness() {

            console.log(gameLoadData);
            if (!gameLoadData.planets[planetId].isHappy) {
                var currentHappiness = parseInt(gameLoadData.planets[planetId].happinessCount);

                currentHappiness++;
                console.log("Happy: " + currentHappiness);
                if (currentHappiness > 25) {
                    happyPlanets++;
                    gameLoadData.planets[planetId].isHappy = true;
                    //for demo only
                    if (happyPlanets === 3) {
                        //win
                        console.log("YOU ARE WINNER")
                        $('#win-con').text("TRUE");
                    }
                }
                gameLoadData.planets[planetId].happinessCount = currentHappiness;
            }
        }

        var amountSpan = $(`.${currentId}amount`);
        console.log(amountSpan);
        $(`.${currentId}amount`).attr("data-amount", currentAmount);
        amountSpan.text(currentAmount);
        currentAmountInCargoSpan.text(" " + currentAmountInCargo);
        moneySpan.text(currentMoney);
        //Save money for DB
        gameLoadData.planets[0].Resources[6].resCount = currentMoney;


        mapTradeResources(currentAmount, currentId);
        var resId;
        function mapTradeResources(count, id) {
            var id = id % 5;
            if (id === 0) { id = 5 }
            resId = id;
            gameLoadData.planets[planetId].Resources[id - 1].resCount = count;
        };

        var tradeDetails = {
            id: gameLoadData.game.id,
            resourceId: resId,
            planetId: correctPlanet(planetId),
            resName: gameLoadData.planets[planetId].Resources[resId - 1].resName,
            resCount: gameLoadData.planets[planetId].Resources[resId - 1].resCount
        }
        function correctPlanet(planetId) {
            if (planetId === 5) {
                return 1;
            }
            else if (planetId === 4) {
                return 2;
            }
            else if (planetId === 3) {
                return 1;
            }
            else if (planetId === 2) {
                return 1;
            }
            else if (planetId === 1) {
                return 5;
            }
        }
        updateTradeValue(tradeDetails);
        // var resource={
        //     id:gameLoadData.planets[0].Resources[resId].id,
        //     resCount:gameLoadData.planets[planetId].Resources[resId - 1].resCount
        //   }
        
        // saveUserResources(resource);

        var gameStats={
            id: gameLoadData.game.id,
            planetId: correctPlanet(planetId),
            happinessCount:gameLoadData.planets[planetId].happinessCount,
            isHappy:gameLoadData.planets[planetId].isHappy
        }
        updateGameStatusValues(gameStats);
    });


    // function saveUserResources(resources){ 
    //     console.log(resources);       
    //     $.ajax({
    //       method: "PUT",
    //       url: "/api/updateUserResources",
    //       // Have to map the original data into it
    //       data: resources
    //     })
    //       .then(function (result) {
    //         // window.location = "/";
    //         console.log("Saved Resources");
    //       });
    //     }

    // This updates the resources whenever a trade happens
    function updateGameStatusValues(stats) {
        $.ajax({
            method: "PUT",
            url: "/api/updateGameStats",
            data: stats
        }).then(function (result) {
            console.log("end stats");
        });
    }

    function updateTradeValue(trade) {
        $.ajax({
            method: "PUT",
            url: "/api/trade",
            data: trade
        }).then(function (result) {
            console.log("end trade");
        });
    }

    function planetData(data, id) {
        let planet = {
            name: data.planets[id].Planet.planetName,
            traderName: data.planets[id].Planet.planetTrader,
            resources: mapTradeResources(data.planets[id].Resources),
            // fuel: data.planets[id].Planet.fuel,
            isHappy: data.planets[id].isHappy,
            favoriteResource: data.planets[id].Planet.planetFavorite,
            uniqueResource: data.planets[id].Planet.planetUnique
        };
        return planet;
    }

    function mapTradeResources(resources) {
        var array = [];
        for (var i = 0; i < resources.length; i++) {
            var obj = {
                name: resources[i].resName,
                id: resources[i].id,
                amount: resources[i].resCount,
                cost: resources[i].resValue
            }
            array.push(obj);
        }
        return array;
    }
})