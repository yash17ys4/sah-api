const SahRegistrationDetails = require('../models/SahRegistrationDetails');
const { body, validationResult } = require('express-validator');
const { json } = require('body-parser');

module.exports.getRegistrations = (req, res) => {
    SahRegistrationDetails.findAll()
    .then(details => {
        const detailsArray = details.map(details => details.toJSON());
        res.status(200).send(detailsArray);
        console.log(detailsArray);
    })
    .catch(err => console.log(err));
};

module.exports.createRegistration = (req, res) => {
    // console.log(req.body);
    SahRegistrationDetails.create({
        app_num: req.body.app_num,
        app_date: req.body.app_date,
        user_id: req.body.user_id,
        purpose: req.body.purpose,
        purpose_of_visit: req.body.purpose_of_visit,
        name: req.body.name,
        organisation: req.body.organisation,
        address: req.body.address,
        nationality: req.body.nationality,
        contact: req.body.contact,
        email: req.body.email,
        age: req.body.age,
        relationship: req.body.relationship,
        check_in: req.body.check_in,
        check_out: req.body.check_out,
        no_of_guests: req.body.no_of_guests,
        single_AC: req.body.single_AC,
        double_AC: req.body.double_AC,
        suite_AC: req.body.suite_AC,
        tariff: req.body.tariff,
        lodging_with_food: req.body.lodging_with_food,
        visitor_category: req.body.visitor_category,
        file_path: req.body.file_path,
        oic_file_path: req.body.oic_file_path,
        hod_status: req.body.hod_status,
        hod_action_timestamp: req.body.hod_status,
        dsw_status: req.body.dsw_status,
        dsw_action_timestamp: req.body.dsw_action_timestamp,
        oic_allotment_status: req.body.oic_allotment_status,
        oic_action_timestamp: req.body.oic_action_timestamp,
        adcm_status: req.body.adcm_status,
        adcm_action_timestamp: req.body.adcm_action_timestamp,
        ddt_status: req.body.ddt_status,
        ddt_action_timestamp: req.body.ddt_action_timestamp,
        deny_reason: req.body.deny_reason,
        allocation_confirm_status: req.body.allocation_confirm_status,
        cancellation_date: req.body.cancellation_date,
        Remark: req.body.Remark,
        lodging: req.body.lodging,
        food: req.body.food,
        lodging_project_no: req.body.lodging_project_no,
        food_project_no: req.body.food_project_no,
        select_action: req.body.select_action,
    })
    .then(rowCreate => {
        res.status(200).json({ message: "registration succesful" });
        console.log(rowCreate);
    })
    .catch(err => console.log(err));
};