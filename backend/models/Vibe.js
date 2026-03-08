const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Vibe = sequelize.define("Vibe", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  title: {
    type: DataTypes.STRING
  },

  image_url: {
    type: DataTypes.STRING
  },

  color: {
    type: DataTypes.STRING
  },

  audio_url: {
    type: DataTypes.STRING
  }

});

module.exports = Vibe;