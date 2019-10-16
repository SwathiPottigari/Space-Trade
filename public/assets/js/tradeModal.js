var planetId ;
$(document).ready(function () {
    //get data
    //create modal with data
    //dummy data for development

    var instructionModal = $('#instructionModal');
    instructionModal.modal();


    $(".planet").click(function (event) {
        //get planet data here
        planetId = $(this).attr('id');
        var planet = planetData(gameLoadData,planetId);
        gameLoadData.planets[0].Resources[5].resCount--;
        $(".Progress-main").attr("value",gameLoadData.planets[0].Resources[5].resCount--);
        var modal;
        function drawModal(planet) {
            var div = $('#modalHolder');
            modal = $('<div>').addClass("modal");
            modal.attr("tabindex", "-1");
            modal.attr("role", "dialog");
            var modalDialog = $('<div>').addClass("modal-content");
            modalDialog.attr("role", "document");
            modal.append(modalDialog);
            var modalContent = $("<div>").addClass("modal-content");
            modalDialog.append(modalContent);
            var modalHeader = $('<h5>').addClass("modal-header");
            modalHeader.text(`Welcome to ${planet.name}, would you like to trade?`);
            modalContent.append(modalHeader);
            var dismissButton = $('<button>').addClass("close");
            dismissButton.attr("data-dismiss", "modal");
            dismissButton.attr("aria-label", "Close");
            var dismissSpan = $('<span>');
            dismissSpan.attr("aria-hidden", "true");
            dismissSpan.text("Close")
            dismissButton.append(dismissSpan);
            modalHeader.append(dismissButton);
            var modalBody = $('<div>').addClass("modal-body container");

            var mainRow = $('<div>').addClass("row");
            var portraitColumn = $('<div>').addClass("col-md-3");
            mainRow.append(portraitColumn);
            var portrait = $('<img>');
            portraitColumn.append(portrait);
            var contentColumn = $('<div>').addClass("col-md-6");
            mainRow.append(contentColumn);
            var contentContainer = $('<div>').addClass("container");
            contentColumn.append(contentContainer);


            
            var table = $('<table>').attr("class", "resTable");
            var headerRow = $('<tr>');
            table.append(headerRow);



            var resourceNameLabel = $('<th>').text("Resource");
            var operation = $("<th>").text("Operation");
            var planetAmount = $("<th>").text("Qty");
            var cost = $("<th>").text("Cost");

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
                    .attr("data-id", resource.id)
                    .attr("data-name",resource.name)
                    .attr("data-buy", "true");
                buttonData.append(resAddButton);
                resRow.append(buttonData);
                var resSubButton = $("<button>");
                resSubButton.text("SELL");
                resSubButton.attr("class", "trade")
                    .attr("data-cost", resource.cost)
                    .attr("data-id", resource.id)
                    .attr("data-name",resource.name)
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
        var res = JSON.stringify(resName);
        console.log(res);

        var currentAmount = $(`.${currentId}amount`).attr("data-amount");
        var currentAmountInCargoSpan = $(`#cargo${resName}amount`);
        
        var currentAmountInCargo = currentAmountInCargoSpan.text();
        //TODO: Need to add the trader's cargo hold, too.



        if ($(this).attr("data-buy") === "true") {
            currentAmount--;
            currentAmountInCargo++;
        } else {
            currentAmount++;
            currentAmountInCargo--;
        }
        // This updates the resources whenever a trade happens
        
        var amountSpan = $(`.${currentId}amount`);
        console.log(amountSpan);
        $(`.${currentId}amount`).attr("data-amount", currentAmount);
        amountSpan.text(currentAmount);
        currentAmountInCargoSpan.text(" " + currentAmountInCargo);
        function mapTradeResources(count,id){
            var id=id%5;
            if(id===0){ id=5}
            gameLoadData.planets[planetId].Resources[id-1].resCount=count;
        };

        var trade = {

        }

        mapTradeResources(currentAmount,currentId);
        //updateTradeValue(trade)
    });

 // This updates the resources whenever a trade happens


    function updateTradeValue(trade) {
        $('.trade').attr("aria-disabled", "true");
        $('.trade').addClass("disabled");

        $.ajax({
            method: "PUT",
            url: "/api/trade",
            data: trade
        })
            .then(function () {
                $('.trade').attr("aria-disabled", "false");
                $('.trade').removeClass("disabled");
            });
    }

    function planetData(data,id) {
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
        var array=[];
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