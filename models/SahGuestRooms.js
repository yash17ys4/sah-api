const Sequelize = require('sequelize');
const db = require('../config/database');

const SahGuestRooms = db.define('sah_guest_rooms', {
    guest_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    room_id: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'sah_guest_rooms',
    timestamps: false
  });

  module.exports = SahGuestRooms;