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


var div = $('#modalHolder');
var modal = $('<div>').addClass("modal");
modal.attr("tabindex","-1");
modal.attr("role","dialog");
var modalDialog = $('<div>').addClass("modal-content");
modalDialog.attr("role","document");
modal.append(modalDialog);
var modalContent = $("<div>").addClass("modal-content");
modalDialog.append(modalContent);
var modalHeader = $('<h5>').addClass("modal-header");
modalHeader.text(`Welcome to ${planet1.name}, would you like to trade?`);
modalContent.append(modalHeader);
var dismissButton = $('<button>').addClass("close");
dismissButton.attr("data-dismiss","modal");
dismissButton.attr("aria-label","Close");
var dismissSpan = $('<span>');
dismissSpan.attr("aria-hidden","true");
dismissSpan.text("Close")
dismissButton.append(dismissSpan);
modalHeader.append(dismissButton);
var modalBody = $('<div>').addClass("modal-body container");

var mainRow = $('<div>').addClass("row");
var portraitColumn = $('<div>').addClass("col-md-3");
mainRow.append(portraitColumn);
var portrait = $('<img>');
portraitColumn.append(portrait);
var contentColumn = $('<div>').addClass("col-md-3");
mainRow.append(contentColumn);
var contentContainer = $('<div>').addClass("container");
contentColumn.append(contentContainer);

planet1.resources.forEach(resource => {
    var resDiv = $('<div>').addClass("row");

    var resourceName = $('<p>');
    resourceName.text(resource.name);
    resDiv.append(resourceName);
    var resAddButton = $("<button>");
    resAddButton.text("BUY");
    resAddButton.attr("class", "buyButton")
        .attr("data-amount", resource.amount)
        .attr("data-cost", resource.cost)
        .attr("data-id",resource.id);
    resDiv.append(resAddButton);
    var resSubButton = $("<button>");
    resSubButton.text("SELL");
    resDiv.append(resSubButton);

    var resAmount = $('<p>').text(resource.amount).val(resource.amount);
    resAmount.attr("id",`${resource.id}amount`);
    var resCost= $('<p>').text(resource.cost);
    resDiv.append(resAmount, resCost);

    contentColumn.append(resDiv);
    


});

modalBody.append(mainRow);
modalContent.append(modalBody);

div.append(modal);

$("#modalDisplay").click(function(){
    modal.modal();
});

$('.buyButton').click(function(event){
    console.log($(this).attr("data-amount"))
    var currentAmount = $(this).attr("data-amount");
    var currentId = $(this).attr("data-id");
    currentAmount--;

    var amountSpan = $(`#${currentId}amount`);
    $(this).attr("data-amount",currentAmount);
    amountSpan.text(currentAmount);
});

