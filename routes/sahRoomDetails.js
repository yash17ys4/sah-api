const express = require('express');
const { body, validationResult } = require('express-validator');
const sahRoomDetailsControllers = require('../controllers/sahRoomDetailsComtrollers');

const router = express.Router();

router.get('/', sahRoomDetailsControllers.getDetails);
router.post('/create', [
    body('building').notEmpty(),
    body('floor').notEmpty(),
    body('room_no').notEmpty(),
    body('room_type').notEmpty(),
    body('checked').notEmpty(),
    body('blocked').notEmpty(),
    body('remark').notEmpty(),
    body('maxchecked').notEmpty()

], sahRoomDetailsControllers.createDetails);

router.put('/update', sahRoomDetailsControllers.updateDetails);
router.delete('/delete', [
    body('room_no').notEmpty()
], sahRoomDetailsControllers.deleteDetails);

module.exports = router;