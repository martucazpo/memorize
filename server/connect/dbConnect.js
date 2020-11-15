if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const app = require("express");

const { Sequelize } = require("sequelize");
const createTables = require("./createTables");
const sequelize = new Sequelize("", process.env.USER, process.env.PASSWORD, {
  host: "localhost",
  dialect: "mariadb",
  dialectOptions: {
    allowPublicKeyRetrieval: true,
    timezone: "Etc/GMT0",
  },
});
sequelize
  .query("CREATE DATABASE IF NOT EXISTS memorize;")
  .then(createTables.createTables)
  .catch((err) => console.log(err));

module.exports = app;
