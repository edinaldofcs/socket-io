import { DataTypes } from "sequelize";

const db = require("../db/conn");

const Room = db.define("Room", {
  room: {
    type: DataTypes.STRING,
    allowNull: false,
    required: true,
    unique: true
  },
  
});


export default  Room ;
