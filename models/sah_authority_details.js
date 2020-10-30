/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_authority_details', {
    sl_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hod_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hod_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hod_dept: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hoc_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hoc_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hoc_dept: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    adean_cm_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    adean_cm_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    adean_cm_dept: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dydt_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dydt_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dydt_dept: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sah_authority_details',
    timestamps: false
    });
};
