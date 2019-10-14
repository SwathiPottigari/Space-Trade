module.exports=function (sequelize, DataTypes){
    var GameStateResources=sequelize.define("GameStateResources",{

        // resourceId:{
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     validate: {
        //       len: [1]
        //     }
        // },
        resName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        
        resValue: {
            type: DataTypes.TEXT,
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