const sequelize = require('sequelize');
const db = require('../config/database');

const SahGuestDetails = db.define('sah_guest_details', {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    app_num: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    organisation: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: "null"
    },
    gender: {
      type: Sequelize.CHAR(1),
      allowNull: false,
      defaultValue: "n"
    },
    contact: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(150),
      allowNull: false
    },
    group_count: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    room_alloted: {
      type: Sequelize.STRING(100),
      allowNull: false,
      defaultValue: "Pending"
    },
    check_in: {
      type: Sequelize.DATE,
      allowNull: false
    },
    check_out: {
      type: Sequelize.DATE,
      allowNull: true
    },
    identity_card: {
      type: Sequelize.STRING(150),
      allowNull: true,
      defaultValue: "Null"
    },
    typeid: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    idcardno: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    paid: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'sah_guest_details',
    timestamps: false
  });

module.exports = SahGuestDetails;

