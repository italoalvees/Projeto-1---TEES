const express = require('express');
const router = express.Router();
const { signIn } = require('./../controller/authController');

router.post('/', signIn);

module.exports = router;
