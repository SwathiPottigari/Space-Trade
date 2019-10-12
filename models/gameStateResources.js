module.exports=function (sequelize, DataTypes){
    var GameStateResources=sequelize.define("GameStateResources",{
        count:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
              len: [1]
            }
        }
    });
    
    GameStateResources.associate = function (models) {
        GameStateResources.belongsTo(models.GamesState, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    
    return GameStateResources;
    };