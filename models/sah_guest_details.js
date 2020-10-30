/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_guest_details', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    app_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    organisation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    group_count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    room_alloted: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    identity_card: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    typeid: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    idcardno: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    paid: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sah_guest_details',
    timestamps: false
    });
};
