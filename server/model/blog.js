const sequelizeConnection = require("./sequelizeConnection");
const { DataTypes } = require('sequelize');

const Blog = sequelizeConnection.define('blog', {
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: DataTypes.STRING,
  date: DataTypes.INTEGER,
  content: DataTypes.STRING
},{
    timestamps: false
  });

module.exports = Blog;