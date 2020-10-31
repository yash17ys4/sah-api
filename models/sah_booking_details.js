/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_booking_details', {
    room_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    app_num: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sah_booking_details',
    timestamps: false
    });
};
