/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_tariff', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    ac_suite: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    ac_suite_conc: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    double_single: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    double_single_conc: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    double_double: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    double_double_conc: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    cgst: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    sgst: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    wef: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'sah_tariff',
    timestamps: false
    });
};
