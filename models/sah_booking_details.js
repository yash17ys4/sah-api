/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_booking_details', {
    room_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    app_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sah_booking_details',
    timestamps: false
    });
};
