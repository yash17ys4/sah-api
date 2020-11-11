const SahTariff = require('../models/SahTariff');
const { body, validationResult } = require('express-validator');
const moment = require('moment');

module.exports.getTariff = (req, res) => {
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
};

module.exports.updateTariff = (req, res) => {
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
}

module.exports.currentTariff = (req, res, next) => {
    var Timestamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    SahTariff.findAll({
        limit: 1,
        order: [ [ 'wef', 'DESC' ]]
    })
    .then((entries) => {
        var tariffVal = entries[0].dataValues;
        
        //writing in the body section of request the current tariff values;
        req.body.ac_suite = tariffVal.ac_suite;
        req.body.ac_suite_conc = tariffVal.ac_suite_conc;
        req.body.double_single = tariffVal.double_single;
        req.body.double_single_conc = tariffVal.double_single_conc;
        req.body.double_double = tariffVal.double_double;
        req.body.double_double_conc = tariffVal.double_double_conc;
        req.body.cgst = tariffVal.cgst;
        req.body.sgst = tariffVal.sgst;

        // console.log("body: ",req.body);
        // res.status(200).send();
        next();
    })
    .catch(err => console.log(err));
    
}