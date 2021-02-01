const path = require('path');
const express = require('express');
// const multer = require('multer');

const userController = require('./../controllers/user');
const { auth } = require('./../utility/utility');

const router = new express.Router();





// const upload = multer({
// 	// dist: path.resolve( __dirname, './..', 'images/avatar')
// 	dist: 'images'
// });








router.route('/login').post(userController.userLogin);
router.route('/me').get(auth, userController.getUserProfile);
// router.route('/me/avatar').post( upload.single('avatar'), userController.uploadSingle);

router.route('/')
	.get(auth, userController.getUsers)
	.post(userController.createUser)
	.patch(auth, userController.updateUser)
	.delete(auth, userController.deleteUser);








module.exports = router;
