const Sequelize = require('sequelize');
const db = require('../config/database');

const  SahAuthorityDetails = db.define('sah_authority_details', {
    sl_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    hod_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hod_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hod_dept: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hoc_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hoc_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    hoc_dept: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    adean_cm_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    adean_cm_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    adean_cm_dept: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dydt_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dydt_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dydt_dept: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'sah_authority_details',
    timestamps: false
  });

module.exports = SahAuthorityDetails;