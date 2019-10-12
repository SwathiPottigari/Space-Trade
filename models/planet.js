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
    return Planet;
  };
  