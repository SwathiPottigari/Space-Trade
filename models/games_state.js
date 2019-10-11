module.exports=function(sequelize, DataTypes){

    var GamesState=sequelize.define("GamesState",{
        planetId:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        happinessCount:{
            type:DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
        },
        isHappy:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false
        },
        isWon:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false
        }
    });

    GamesState.associate = function (models) {
        GamesState.belongsTo(models.Games, {
            foreignKey: {
                allowNull: false
            }
        });
        GamesState.hasMany(models.GameStateResources, {
            onDelete: "cascade"
        });
    };


    return GamesState;
};