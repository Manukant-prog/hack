const express = require('express');
const router = express.Router();

const { postHandler, getHandler } = require('../controllers/bfhlController');

router.post('/', postHandler);
router.get('/', getHandler);

module.exports = router;
