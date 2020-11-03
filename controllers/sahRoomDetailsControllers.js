const SahRoomDetails = require('../models/SahRoomDetails');
const { body, validationResult } = require('express-validator');
const { json } = require('body-parser');

module.exports.getDetails = (req, res) => {
    SahRoomDetails.findAll()
    .then(rooms => {
        const roomArray = rooms.map(rooms => rooms.toJSON());
        console.log(roomArray);
        res.status(200).send(roomArray);
    })
    .catch(err => console.log(err));
}

module.exports.createDetails = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({ errors: errorsArray });
    }
    SahRoomDetails.create({
        building: req.body.building,
        floor: req.body.floor,
        room_no: req.body.room_no,
        room_type: req.body.room_type,
        checked: req.body.checked,
        blocked: req.body.blocked,
        remark: req.body.remark,
        maxchecked: req.body.maxchecked
    })
    .then(() => {
        console.log('new room added');
        res.status(200).json({ message: "room added" });
    })
    .catch(err => console.log(err));
}

module.exports.updateDetails = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        res.status(400).json({ errors: errorsArray });
    }
    SahRoomDetails.update({
        blocked: req.body.blocked
    }, {
        where: {room_no: req.params.room_no
    }})
    .then((rowsUpdated) => {
        res.status(200).json(rowsUpdated)
    })
    .catch(err => console.log(err));
 
}

module.exports.deleteDetails = (req, res) => {
    var room_no = req.params.room_no;
    if(!room_no) {
        res.status(400).json({ message: "incorrect params" });
    }
    SahRoomDetails.destroy({
        where : {
            room_no: req.params.room_no
        }
    })
    .then(() => {
        res.status(200).json({ message: "room removed" });
    })
    .catch(err => console.log(err));
}