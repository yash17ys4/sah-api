const SahRegistrationDetails = require('../models/SahRegistrationDetails');
const { body, validationResult } = require('express-validator');
const { json } = require('body-parser');


module.exports.getHod = (req, res) => {
    SahRegistrationDetails.findAll({
        attributes: ['app_num','app_date','name','purpose',
        'organisation','no_of_guests','check_in',
        'check_out','no_of_guests','tariff',
        'visitor_category','hod_status'],
        where: {hod_status: "Pending"}})
    .then(details => {
        const detailsArray = details.map(details => details.toJSON());
        res.status(200).send(detailsArray);
        console.log(detailsArray);
    })
    .catch(err => console.log(err));
};


module.exports.getDsw = (req, res) => {
    SahRegistrationDetails.findAll({
        attributes: ['app_num','app_date','name','purpose',
        'organisation','no_of_guests','check_in',
        'check_out','no_of_guests','tariff',
        'visitor_category','dsw_status'],
        where: {dsw_status: "Pending"}})
    .then(details => {
        const detailsArray = details.map(details => details.toJSON());
        res.status(200).send(detailsArray);
        console.log(detailsArray);
    })
    .catch(err => console.log(err));
};


module.exports.getAdcm = (req, res) => {
    SahRegistrationDetails.findAll({
        attributes: ['app_num','app_date','name','purpose',
        'organisation','no_of_guests','check_in',
        'check_out','no_of_guests','tariff',
        'visitor_category','adcm_status'],
        where: {adcm_status: "Pending"}})
    .then(details => {
        const detailsArray = details.map(details => details.toJSON());
        res.status(200).send(detailsArray);
        console.log(detailsArray);
    })
    .catch(err => console.log(err));
};

module.exports.getDdt = (req, res) => {
    SahRegistrationDetails.findAll({
        attributes: ['app_num','app_date','name','purpose',
        'organisation','no_of_guests','check_in',
        'check_out','no_of_guests','tariff',
        'visitor_category','ddt_status'],
        where: {ddt_status: "Pending"}})
    .then(details => {
        const detailsArray = details.map(details => details.toJSON());
        res.status(200).send(detailsArray);
        console.log(detailsArray);
    })
    .catch(err => console.log(err));
};