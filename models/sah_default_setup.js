/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_default_setup', {
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'sah_default_setup',
    timestamps: false
    });
};
