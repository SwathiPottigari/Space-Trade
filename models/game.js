module.exports = function (sequelize, DataTypes) {
    var Game = sequelize.define("Game", {
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        isWon:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue:false
        }
    });


    Game.associate = function (models) {
        Game.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });
        Game.hasMany(models.GamesState, {
            onDelete: "cascade"
        });
    };

    return Game;
};