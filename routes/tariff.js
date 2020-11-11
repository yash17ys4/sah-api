const express = require('express');
const { body, validationResult } = require('express-validator');
const tariffControllers = require('../controllers/tariffControllers');

const router = express.Router();

router.get('/', tariffControllers.getTariff);

// router.get('/latest', tariffControllers.currentTariff);

router.post('/update', [
    body('ac_suite').notEmpty(),
    body('ac_suite_conc').notEmpty(),
    body('double_single').notEmpty(),
    body('double_single_conc').notEmpty(),
    body('double_double').notEmpty(),
    body('double_double_conc').notEmpty(),
    body('cgst').notEmpty(),
    body('sgst').notEmpty()
], tariffControllers.updateTariff);

module.exports = router;