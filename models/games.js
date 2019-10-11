module.exports = function (sequelize, DataTypes) {
    var Games = sequelize.define("Games", {
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });


    Games.associate = function (models) {
        Games.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });
        Games.hasMany(models.GamesState, {
            onDelete: "cascade"
        });
    };

    return Games;
};