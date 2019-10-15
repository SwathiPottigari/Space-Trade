$(document).ready(function () {
    //get data
    //create modal with data
    //dummy data for development
    let planet1 = {
        name: "Moo-Ville",
        traderName: "Bill",
        resources: [
            {
                name: "space kitty litter",
                id: 1,
                amount: 10,
                cost: 100
            },
            {
                name: "space yarn",
                id: 2,
                amount: 40,
                cost: 25
            },
            {
                name: "space catnip",
                id: 3,
                amount: 20,
                cost: 50
            },
            {
                name: "space fish",
                id: 4,
                amount: 100,
                cost: 1000
            },
        ],
        fuel: 100,
        isHappy: false,
        favoriteResource: "",
        uniqueResource: "",
    };

    $(".planet").click(function () {
        //get planet data here
        var planet = planet1;
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
            var planetAmount = $("<th>").text("Amount");
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
})