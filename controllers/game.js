let game = {
    //This gets more precise when we have a functioning object model, but for now, the basic idea is that 
    //a planet's state is updated to another value.
    //We take a game state from the DB and create a game state for the game in progress
    loadGame: function (originalPlanets, updatedPlanets) {
        for (let index = 0; index < originalPlanets.length; index++) {
            const element = originalPlanets[index];

            updatedPlanets[index] = element;
        }
        console.log("Loading planets: " + JSON.stringify(updatedPlanets));
    },
    //We take the current state of all our planets, galatic happiness, etc, and save that to the game state table
    saveGame: function (galaxyState) {
        console.log("Saving planets: " + JSON.stringify(galaxyState));
    },
    displayPlanetaryGoods: function (planet) {
        planet.resources.forEach(resource => {
            if (resource.amount > 0) {
                console.log(`${planet.traderName} is selling ${resource.name} for ${resource.cost}. They have ${resource.amount} to sell.`)
            } else {
                console.log(`${resource.name} are out of stock.`)
            }
        });
    },
    processTrade: function (trader, planet, resource, buying, cargoHoldLimit) {
        //Lets not over complicate this, we'll process trades one increment at a time using +/- buttons on the UI
        //We can revist if this has negative performance impact (lag between client, server, and db)
        if (buying) {
            if (trader.cargoHold.length >= cargoHoldLimit) {
                console.log("Can't buy - empty your cargo hold by selling first.")
            } else {
                //trade
                let resourceToBuy = planet.resources.find((planetaryResource) => {
                    return planetaryResource.name === resource;
                });
                console.log(`Purchasing ${resourceToBuy}`);


                let resourceInCargoHold = trader.cargoHold.find((cargoResource) => {
                    return cargoResource.name === resource;
                });

                //check if the item is already in the cargo hold, if not, add it.
                if (!resourceInCargoHold) {
                    resourceInCargoHold = {
                        name: resource,
                        amount: 0
                    }
                    trader.cargoHold.push(resourceInCargoHold)

                }

                resourceInCargoHold.amount++;
                resourceToBuy.amount--;
                trader.money -= resourceToBuy.cost;
            }
        }
        //if you're not buying, you're selling
        else {
            //You can sell as much as you like, we don't need to validate on this end, we'll have the UI disapear once you're out of a resource to sell
            //If we have client side validation, this never needs to have a null check like on purchase
            let resourceInCargoHold = trader.cargoHold.find((cargoResource) => {
                return cargoResource.name === resource;
            });

            let planetaryResource = planet.resources.find((resToSell) => {
                return resToSell.name === resource;
            });

            if (!planetaryResource) {
                planetaryResource = {
                    name: resource,
                    amount: 0,
                    cost: 10//this needs to be updated from the db, not from nothing like here.
                }
                planet.resources.push(planetaryResource)

            }

            resourceInCargoHold.amount--;
            planetaryResource.amount++;
            trader.money += planetaryResource.cost;
            
            //remove the item from the cargo hold if we don't have any left.
            if(resourceInCargoHold.amount === 0){
                trader.cargoHold = trader.cargoHold.filter(isMatch)
            }

            function isMatch(res){
                if(resource === res.name){
                    return false;
                }
                return true;
            }

        };
        console.log("Trader:" + JSON.stringify(trader))
        console.log("Planet:" + JSON.stringify(planet))
    },
    updatePlayerFuel: function (amount) {

    },
    updatePlanetaryHappiness: function () {

    },
    updateGalacticHappiness: function () {

    },
    planets: [{}, {}, {}, {}, {}],
    //this will update on load/
    fuel: 100,
    //this will update on load/
    money: 1000,
    cargoHold: [],
    //planetId
    location: 1,

}
module.exports = game;