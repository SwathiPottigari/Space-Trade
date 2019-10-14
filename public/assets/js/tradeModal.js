//get data
//create modal with data
//dummy data for development
let planet1 = {
    name: "Moo-Ville",
    traderName: "Bill",
    resources: [
        {
            name: "space kitty litter",
            amount: 10,
            cost: 100
        },
        {
            name: "space yarn",
            amount: 40,
            cost: 25
        },
        {
            name: "space catnip",
            amount: 20,
            cost: 50
        },
        {
            name: "space fish",
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
var modalBody = $('<div>').addClass("modal-body");

planet1.resources.forEach(resource => {
    console.log("Here...")
    var label = $('<p>');
    label.text(resource.name);
    modalBody.append(label);
    var resAddButton = $("<button>");
    resAddButton.text("BUY");
    modalBody.append(resAddButton);
    var resSubButton = $("<button>");
    resSubButton.text("SELL");
    modalBody.append(resSubButton);
});

modalContent.append(modalBody);

div.append(modal);

$("#modalDisplay").click(function(){
    modal.modal();
});

