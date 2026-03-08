const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Like = sequelize.define("Like", {

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  user_id: {
    type: DataTypes.INTEGER
  },

  vibe_id: {
    type: DataTypes.INTEGER
  }

});

module.exports = Like;
