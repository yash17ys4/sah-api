const Sequelize = require('sequelize');
const db = require('../config/database');

const SahRegistrationDetails = db.define('sah_registration_details', {
    app_num: {
      type: Sequelize.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    app_date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_id: {
      type: Sequelize.STRING(11),
      allowNull: false
    },
    purpose: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    purpose_of_visit: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    organisation: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    nationality: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    contact: {
      type: Sequelize.STRING(11),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER(3),
      allowNull: false
    },
    relationship: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    check_in: {
      type: Sequelize.DATE,
      allowNull: false
    },
    check_out: {
      type: Sequelize.DATE,
      allowNull: false
    },
    no_of_guests: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    single_AC: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    double_AC: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    suite_AC: {
      type: Sequelize.INTEGER(2),
      allowNull: false
    },
    tariff: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    lodging_with_food: {
      type: Sequelize.CHAR(1),
      allowNull: false,
      defaultValue: "0"
    },
    visitor_category: {
      type: Sequelize.STRING(3),
      allowNull: false
    },
    file_path: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    oic_file_path: {
      type: Sequelize.STRING(200),
      allowNull: true
    },
    hod_status: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    hod_action_timestamp: {
      type: Sequelize.DATE,
      allowNull: true
    },
    dsw_status: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    dsw_action_timestamp: {
      type: Sequelize.DATE,
      allowNull: true
    },
    oic_allotment_status: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    oic_action_timestamp: {
      type: Sequelize.DATE,
      allowNull: true
    },
    adcm_status: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    adcm_action_timestamp: {
      type: Sequelize.DATE,
      allowNull: true
    },
    ddt_status: {
      type: Sequelize.STRING(20),
      allowNull: true
    },
    ddt_action_timestamp: {
      type: Sequelize.DATE,
      allowNull: true
    },
    deny_reason: {
      type: Sequelize.STRING(500),
      allowNull: true
    },
    allocation_confirm_status: {
      type: Sequelize.INTEGER(1),
      allowNull: true
    },
    cancellation_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    Remark: {
      type: Sequelize.STRING(256),
      allowNull: true
    },
    lodging: {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: "NA"
    },
    food: {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: "NA"
    },
    lodging_project_no: {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: "NA"
    },
    food_project_no: {
      type: Sequelize.STRING(50),
      allowNull: false,
      defaultValue: "NA"
    },
    select_action: {
      type: Sequelize.STRING(11),
      allowNull: false,
      defaultValue: "est_ar"
    }
  }, {
    tableName: 'sah_registration_details',
    timestamps: false
  });

module.exports = SahRegistrationDetails;