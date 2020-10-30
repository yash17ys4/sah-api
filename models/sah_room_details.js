/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_room_details', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    building: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    floor: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    room_no: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    room_type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    checked: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    blocked: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    maxchecked: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sah_room_details',
    timestamps: false
    });
};
