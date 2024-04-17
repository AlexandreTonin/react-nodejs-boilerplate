const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mysql",
        logging: false,
        define: {
            freezeTableName: true,
        },
    }
);

async function syncDatabase() {
    try {
        await sequelize.sync();
        console.log("Conectado no banco de dados: ", process.env.DB_NAME, "\n");
    } catch (error) {
        console.log("Erro ao conectar com o banco: ", error);
    }
}

module.exports = { sequelize, syncDatabase };