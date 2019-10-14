module.exports=function(sequelize, DataTypes){

    var GamesState=sequelize.define("GamesState",{
        happinessCount:{
            type:DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        isHappy:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false
        }        
    });

    GamesState.associate = function (models) {
        GamesState.belongsTo(models.Game, {
            foreignKey: {
                allowNull: false
            }
        });
        GamesState.hasMany(models.GameStateResources, {
            onDelete: "cascade"
        });
        GamesState.belongsTo(models.Planet, {
            foreignKey: {
                allowNull: false
            }
        });
       
    };


    return GamesState;
};