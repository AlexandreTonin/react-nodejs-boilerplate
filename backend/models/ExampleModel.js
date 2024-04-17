const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/dbConnection");

const ExampleModel = sequelize.define("example", {
    exampleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    }
});

module.exports = ExampleModel