/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_tariff', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ac_suite: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ac_suite_conc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    double_single: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    double_single_conc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    double_double: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    double_double_conc: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    cgst: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    sgst: {
      type: DataTypes.DECIMAL,
      allowNull: true
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
