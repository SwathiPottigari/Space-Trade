// **SEQUELIZE PLANET TABLE** //
module.exports = function(sequelize, DataTypes) {
    var Planet = sequelize.define("Planet", {
      planetName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      
      planetUnique: {
        type: DataTypes.TEXT,
      },

      planetFavorite: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      planetImage: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      planetTrader: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      planetStory: {
        type: DataTypes.TEXT,
      },
    });

    Planet.associate = function (models) {
      // Planet.belongsTo(models.Resource,{
      //     foreignKey: {
      //         allowNull: false
      //     }
      // });
      Planet.hasMany(models.GamesState);
  };
 

    return Planet;
  };
  