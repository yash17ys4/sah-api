var DataTypes = require("sequelize").DataTypes;
var _sah_authority_details = require("./sah_authority_details");
var _sah_default_setup = require("./sah_default_setup");
var _sah_booking_details = require("./sah_booking_details");
var _sah_guest_rooms = require("./sah_guest_rooms");
var _sah_guest_details = require("./sah_guest_details");
var _sah_tariff = require("./sah_tariff");
var _sah_registration_details = require("./sah_registration_details");
var _sah_room_details = require("./sah_room_details");

function initModels(sequelize) {
  var sah_authority_details = _sah_authority_details(sequelize, DataTypes);
  var sah_default_setup = _sah_default_setup(sequelize, DataTypes);
  var sah_booking_details = _sah_booking_details(sequelize, DataTypes);
  var sah_guest_rooms = _sah_guest_rooms(sequelize, DataTypes);
  var sah_guest_details = _sah_guest_details(sequelize, DataTypes);
  var sah_tariff = _sah_tariff(sequelize, DataTypes);
  var sah_registration_details = _sah_registration_details(sequelize, DataTypes);
  var sah_room_details = _sah_room_details(sequelize, DataTypes);

  return {
    sah_authority_details,
    sah_default_setup,
    sah_booking_details,
    sah_guest_rooms,
    sah_guest_details,
    sah_tariff,
    sah_registration_details,
    sah_room_details,
  };
}
module.exports = { initModels };
