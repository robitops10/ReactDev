const express = require('express');
const taskController = require('./../controllers/task');
const { auth } = require('./../utility/utility');

const router = new express.Router();

router.route('/')
	.get(auth, taskController.getTasks )
	.post(auth, taskController.createTask )
	.get(auth, taskController.getTask )

router.route('/:id')
	.delete(auth, taskController.deleteTask)
	.patch(auth, taskController.updateTask)

module.exports = router;
