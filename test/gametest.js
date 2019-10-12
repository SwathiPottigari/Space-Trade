let game = require('../controllers/game');
const fuelCost = 100;
const fuelBurnRate = 10;
const cargoHoldLimit = 4; //This is just for testing, I think a limit of 9 with 18 tradable goods plus uniques makes more sense

let trader = {
    name: "Space Mike",
    cargoHold: [
        {
            name: "space kitty litter",
            amount: 10
        },
        {
            name: "space yarn",
            amount: 3
        },
        {
            name: "space balls",
            amount: 10
        }
    ],
    fuel: 85,
    money: 10000
}

let planet1 = {
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

let planet2 = {
    traderName: "Sally",
    resources: [
        {
            name: "space dog treats",
            amount: 10,
            cost: 100
        },
        {
            name: "space leashes",
            amount: 40,
            cost: 25
        },
        {
            name: "space balls",
            amount: 20,
            cost: 50
        },
        {
            name: "space chew toys",
            amount: 100,
            cost: 1000
        },
    ],
    fuel: 100,
    isHappy: false,
    favoriteResource: "",
    uniqueResource: "",
};


let saveTestplanet1 = {
    traderName: "Bill",
    resources: [
        {
            name: "space kitty litter",
            amount: 3,
            cost: 100
        },
        {
            name: "space yarn litter",
            amount: 6,
            cost: 25
        },
        {
            name: "space catnip",
            amount: 9,
            cost: 50
        },
        {
            name: "space fish",
            amount: 0, cost: 1000
        },
    ],
    fuel: 50,
    isHappy: true,
    favoriteResource: "",
    uniqueResource: "",
};

let saveTestplanet2 = {
    traderName: "Sally",
    resources: [
        {
            name: "space dog treats",
            amount: 0,
            cost: 100
        },
        {
            name: "space leashes",
            amount: 5,
            cost: 25
        },
        {
            name: "space balls",
            amount: 4,
            cost: 50
        },
        {
            name: "space chew toys",
            amount: 20,
            cost: 1000
        },
    ],
    fuel: 30,
    isHappy: false,
    favoriteResource: "",
    uniqueResource: "",
};

let originalPlanets = [planet1, planet2];
let updatedPlanets = [saveTestplanet1, saveTestplanet2];

//game.loadGame(originalPlanets, updatedPlanets);
//game.displayPlanetaryGoods(saveTestplanet2);

//normal purchase trade
//game.processTrade(trader, planet1, "space kitty litter", true, 4);

//at cargo limit
//trader.cargoHold.push("","","")
//game.processTrade(trader, planet1, "space kitty litter", true, 4);

//new item for cargo hold
game.processTrade(trader, planet1, "space catnip", true, 4);

//normal sell trade
