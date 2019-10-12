let game = {
    loadGame : function(planets){
        
    },
    saveGame : function(){
        console.log("Files associated")
    },
    displayPlanetaryGoods : function(){
        
    },
    processTrade : function (){
    //probably need an object that holds all the values for the various trade values
    //buying - { products {product1, amount},{product2, amount}}
    //selling { products {product1, amount},{product2, amount}}
    //get total value to add/subtract for money
    },
    updatePlanetaryStock : function(){

    },
    updatePlayerMoney : function(){

    },
    updatePlayerStock : function(){

    },
    updatePlayerFuel : function(){

    },
    updatePlanetaryHappiness : function(){

    },
    updateGalacticHappiness : function(){

    },
    planets : [{},{},{},{},{}],
    //this will update on load/
    fuel: 100,
    //this will update on load/
    money: 1000,
    cargoHold: [],
    //planetId
    location: 1,

}
module.exports = game;