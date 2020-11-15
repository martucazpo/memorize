"use strict";
const { Model } = require("sequelize");
module.exports = async (sequelize, DataTypes) => {
  class Documents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Documents.init(
    {
      index: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        allowNull: false,
      },
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      document: {
        type: DataTypes.STRING,
        allowNull: false,
        key: true,
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      order: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      user: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Documents",
    }
  );
 
  return Documents;
};
