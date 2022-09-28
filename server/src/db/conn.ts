import { Sequelize } from "sequelize";

const sequelize = new Sequelize('chat', 'chat', 'chat',{
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
})


module.exports = sequelize