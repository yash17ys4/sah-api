const Sequelize = require('sequelize');
const db = require('../config/database');

const SahRoomDetails = db.define('sah_room_details', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  building: {
    type: Sequelize.STRING(15),
    allowNull: false
  },
  floor: {
    type: Sequelize.STRING(15),
    allowNull: false
  },
  room_no: {
    type: Sequelize.INTEGER(5),
    allowNull: false
  },
  room_type: {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  checked: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  },
  blocked: {
    type: Sequelize.STRING(1),
    allowNull: false,
    defaultValue: "0"
  },
  remark: {
    type: Sequelize.STRING(50),
    allowNull: true
  },
  maxchecked: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    defaultValue: 0
  }
}, {
  tableName: 'sah_room_details',
  timestamps: false
});

module.exports = SahRoomDetails;