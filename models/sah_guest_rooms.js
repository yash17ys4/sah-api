/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_guest_rooms', {
    guest_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    room_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sah_guest_rooms',
    timestamps: false
    });
};
