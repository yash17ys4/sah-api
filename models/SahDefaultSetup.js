const Sequelize = require('sequelize');
const db = require('../config/database');

const SahDefaultSetup = db.define('sah_default_setup', {
    start_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'sah_default_setup',
    timestamps: false
  });

module.exports = SahDefaultSetup;
