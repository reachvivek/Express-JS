const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.get('/', userController.getUsers)

router.get('/:userID', userController.getUser)

router.post('/', userController.postUser)

router.delete('/:userID', userController.deleteUser)

router.put('/:userID', userController.editUser)

module.exports=router