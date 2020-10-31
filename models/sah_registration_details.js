/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_registration_details', {
    app_num: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    app_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_id: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    purpose: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    purpose_of_visit: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    organisation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nationality: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    relationship: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull: false
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: false
    },
    no_of_guests: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    single_AC: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    double_AC: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    suite_AC: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    tariff: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    lodging_with_food: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      defaultValue: "0"
    },
    visitor_category: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    file_path: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    oic_file_path: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    hod_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    hod_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dsw_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    dsw_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    oic_allotment_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    oic_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    adcm_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    adcm_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ddt_status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ddt_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    deny_reason: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    allocation_confirm_status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cancellation_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Remark: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    lodging: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "NA"
    },
    food: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "NA"
    },
    lodging_project_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "NA"
    },
    food_project_no: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "NA"
    },
    select_action: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: "est_ar"
    }
  }, {
    sequelize,
    tableName: 'sah_registration_details',
    timestamps: false
    });
};
