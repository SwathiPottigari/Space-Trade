//npm package import, bcrypt does the encrypting for us
var bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          password: {
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[8]
            }
        }
    });

    User.associate = function(models) {
        User.hasMany(models.Game, {
          onDelete: "cascade"
        });
      };

      User.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
      });
    

return User;
};