$(document).ready(function () {
    //get data
    //create modal with data
    //dummy data for development

    $(".planet").click(function (event) {
        //get planet data here
        var id = $(this).attr('id');
        var planet = planetData(gameLoadData,id);
        console.log(planet)

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


            //var headerDiv = $('<div>').addClass("row");
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
                    .attr("data-buy", "true");
                buttonData.append(resAddButton);
                resRow.append(buttonData);
                var resSubButton = $("<button>");
                resSubButton.text("SELL");
                resSubButton.attr("class", "trade")
                    .attr("data-cost", resource.cost)
                    .attr("data-id", resource.id)
                    .attr("data-buy", "false");
                buttonData.append(resSubButton);

                var resAmount = $('<td>').text(resource.amount)
                    .attr("data-amount", resource.amount)
                resAmount.attr("id", `${resource.id}amount`);
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
        console.log("HERE")
        var currentId = $(this).attr("data-id");
        var currentAmount = $(`#${currentId}amount`).attr("data-amount");

        //TODO: Need to add the trader's cargo hold, too.

        if ($(this).attr("data-buy") === "true") {
            currentAmount--;
        } else {
            currentAmount++;
        }

        var amountSpan = $(`#${currentId}amount`);
        $(`#${currentId}amount`).attr("data-amount", currentAmount);
        amountSpan.text(currentAmount);

        var trade = {

        }

        //updateTradeValue(trade)
    });


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
        console.log("this is id")
        console.log(id)
        let planet = {
            name: data.planets[id].Planet.planetName,
            traderName: data.planets[id].Planet.traderName,
            resources: mapResources(data.planets[id].Resources),            
            // fuel: data.planets[id].Resources,
            isHappy: data.planets[id].isHappy,
            favoriteResource: data.planets[id].Planet.planetFavorite,
            uniqueResource: data.planets[id].Planet.planetUnique
        };
        return planet;
    } 

    function mapResources(resources) {
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