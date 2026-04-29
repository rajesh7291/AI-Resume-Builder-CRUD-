const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Resume = sequelize.define("Resume", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.STRING,
  education: DataTypes.TEXT,
  skills: DataTypes.TEXT,
  experience: DataTypes.TEXT,
  summary: DataTypes.TEXT,
});

module.exports = Resume;
