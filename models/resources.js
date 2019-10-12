// **SEQUELIZE PLANET TABLE** //
module.exports = function (sequelize, DataTypes) {
    var Resource = sequelize.define("Resource", {
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
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });
    return Resource;
};