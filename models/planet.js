module.exports = function(sequelize, DataTypes) {
    var planets = sequelize.define("planets", {
      planetName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      planetID: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }

      },
      planetUnique: {
        type: DataTypes.STRING,
        defaultValue: "game"
      }
      planetFavorite: {


      }

      planetImage: {


      }

      planetTrader: {


      }

      planetStory: {

        
      }
    });
    return planet;
  };
  