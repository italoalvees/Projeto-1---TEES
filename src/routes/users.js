const express = require('express');
const router = express.Router();
const {listUsers, listUser, createUser, updateUser, deleteUser} = require('./../controller/usersController.js')

router.get('/', listUsers);

router.get('/:id', listUser);

router.post('/',createUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);



module.exports = router;




