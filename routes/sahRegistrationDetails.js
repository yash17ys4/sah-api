const express = require('express');
const { body, validationResult, sanitizeParam } = require('express-validator');
const sahRegistrationDetailsControllers = require('../controllers/sahRegistrationDetailsControllers');
const tariffControllers = require('../controllers/tariffControllers'); // to get the recent tariff values

const router = express.Router();

router.get('/', sahRegistrationDetailsControllers.getRegistrations);

router.post('/register',
            tariffControllers.currentTariff, //to get the latest tariff rates from the database
        /*[
            body('app_num').notEmpty(),
            body('name').notEmpty()
        ],*/ sahRegistrationDetailsControllers.createRegistration);

module.exports = router;