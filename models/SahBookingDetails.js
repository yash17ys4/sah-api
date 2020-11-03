const Sequelize = require('sequelize');
const db = require('../config/database');

const SahBookingDetails = db.define('sah_booking_details', {
    room_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    app_num: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'sah_booking_details',
    timestamps: false
  });

  module.exports = SahBookingDetails;