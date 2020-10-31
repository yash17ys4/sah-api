/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_room_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    building: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    floor: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    room_no: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    room_type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    checked: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    },
    blocked: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0"
    },
    remark: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    maxchecked: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'sah_room_details',
    timestamps: false
    });
};
