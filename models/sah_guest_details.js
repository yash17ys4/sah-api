/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_guest_details', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    app_num: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    organisation: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "null"
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "n"
    },
    contact: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    group_count: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    room_alloted: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Pending"
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull: false
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: true
    },
    identity_card: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: "Null"
    },
    typeid: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    idcardno: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    paid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sah_guest_details',
    timestamps: false
    });
};
