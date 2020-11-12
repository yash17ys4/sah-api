const express = require('express');
const { body, validationResult, sanitizeParam } = require('express-validator');
const sahStatusControllers = require('../controllers/sahStatusControllers');

const router = express.Router();

router.get('/hod', sahStatusControllers.getHod);
router.get('/dsw', sahStatusControllers.getDsw);
router.get('/adcm',sahStatusControllers.getAdcm);
router.get('/ddt', sahStatusControllers.getDdt);

module.exports = router;