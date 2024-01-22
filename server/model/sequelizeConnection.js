const { Sequelize } = require('sequelize');
const sequelizeConnection = new Sequelize({
    dialect: "sqlite",
    storage: `${process.cwd()}/testWorkDatabase.db`
  });
module.exports = sequelizeConnection;
