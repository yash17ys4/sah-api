const db = require('../config/database');
const Sequelize = require('sequelize');

const SahTariff = db.define('sah_tariff', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER(10),
    allowNull: false,
    primaryKey: true
  },
  ac_suite: {
    type: Sequelize.INTEGER(10),
    allowNull: false
  },
  ac_suite_conc: {
    type: Sequelize.INTEGER(10),
    allowNull: false
  },
  double_single: {
    type: Sequelize.INTEGER(10),
    allowNull: false
  },
  double_single_conc: {
    type: Sequelize.INTEGER(10),
    allowNull: false
  },
  double_double: {
    type: Sequelize.INTEGER(10),
    allowNull: false
  },
  double_double_conc: {
    type: Sequelize.INTEGER(10),
    allowNull: false
  },
  cgst: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  sgst: {
    type: Sequelize.FLOAT,
    allowNull: false,
    defaultValue: 0
  },
  wef: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
  }
}, {
  tableName: 'sah_tariff',
  timestamps: false
});

module.exports = SahTariff;