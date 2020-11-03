const express = require('express');
const { body, validationResult, sanitizeParam } = require('express-validator');
const sahRegistrationDetailsControllers = require('../controllers/sahRegistrationDetailsControllers');

const router = express.Router();

router.get('/', sahRegistrationDetailsControllers.getRegistrations);

router.post('/register', /*[
    body('app_num').notEmpty(),
    body('name').notEmpty()
],*/ sahRegistrationDetailsControllers.createRegistration);

module.exports = router;