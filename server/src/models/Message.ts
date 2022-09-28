import { DataTypes } from "sequelize";

const db = require("../db/conn");

const Message = db.define("Message", {
  room: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
  },
  dataTime: {
    type: DataTypes.DATE,
  },
});


export default { Message };
