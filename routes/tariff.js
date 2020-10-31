const express = require('express');
const { body, validationResult } = require('express-validator');
const SahTariff = require('../models/sah_tariff');

const router = express.Router();

router.get('/', (req, res) => {
    SahTariff.findAll()
    .then(sahtariffs => {
        const tariffArray = sahtariffs.map(sahtariffs => sahtariffs.toJSON());
        console.log(tariffArray);
        res.status(200).send(tariffArray);
    })
    .catch(err => {
        res.status(500).send();
        console.log(err);
    });
});

router.post('/update', [
    body('ac_suite').notEmpty(),
    body('ac_suite_conc').notEmpty(),
    body('double_single').notEmpty(),
    body('double_single_conc').notEmpty(),
    body('double_double').notEmpty(),
    body('double_double_conc').notEmpty(),
    body('cgst').notEmpty(),
    body('sgst').notEmpty()
], (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }
    SahTariff.create({
        ac_suite: req.body.ac_suite,
        ac_suite_conc: req.body.ac_suite_conc,
        double_single: req.body.double_single,
        double_single_conc: req.body.double_single_conc,
        double_double: req.body.double_double,
        double_double_conc: req.body.double_double_conc,
        cgst: req.body.cgst,
        sgst: req.body.sgst,
    })
    .then(() => {
        console.log('new entry added');
        res.status(200).json({ message: "update successful" });
    })
    .catch(err => console.log(err));
});

module.exports = router;