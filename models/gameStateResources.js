module.exports=function (sequelize, DataTypes){
    var GameStateResources=sequelize.define("GameStateResources",{

        resName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
        resValue: {
            type: DataTypes.INTEGER,
        },
        resCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
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