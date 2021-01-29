const express = require('express');
const userController = require('./../controllers/user');

const router = new express.Router();


router.route('/')
	.get(userController.getUsers)
	.post(userController.createUser);

router.route('/:id')
	.get(userController.getUserById)
	.patch(userController.updateUser)
	.delete(userController.deleteUser);


router.route('/login').post(userController.userLogin);






module.exports = router;
