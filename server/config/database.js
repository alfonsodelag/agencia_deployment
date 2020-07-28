const Sequelize = require('sequelize');
require('dotenv').config({ path: 'variables.env' })

console.log(process.env.BD_HOST); // Dará 127.0.0.1

// .env lee el nombre de la base de datos ("agenciadeviajes") utilizando process.env.BD_NOMBRE
module.exports = new Sequelize('process.env.BD_NOMBRE', 'process.env.BD_USER', 'process.env.BD_PASS', {
    host: process.env.BD_HOST,
    // Esto viene de MAMP preferences MYSQL port
    port: process.env.BD_PASS,
    dialect: 'mysql',
    define: {
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    // operatorsAliases: false
})