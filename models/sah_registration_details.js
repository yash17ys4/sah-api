/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sah_registration_details', {
    app_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    app_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    user_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    purpose: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    purpose_of_visit: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    organisation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    contact: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    relationship: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    check_in: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    check_out: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    no_of_guests: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    single_AC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    double_AC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    suite_AC: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    tariff: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lodging_with_food: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    visitor_category: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    file_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    oic_file_path: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hod_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    hod_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    dsw_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dsw_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    oic_allotment_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    oic_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    adcm_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    adcm_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    ddt_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ddt_action_timestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    deny_reason: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    allocation_confirm_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    cancellation_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "0000-00-00 00:00:00"
    },
    Remark: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lodging: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    food: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lodging_project_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    food_project_no: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    select_action: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sah_registration_details',
    timestamps: false
    });
};
