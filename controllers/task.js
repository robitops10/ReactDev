const Task = require('./../models/task');
const { catchAsync } = require('./../utility/utility');


exports.getTasks = async (req, res) => {
	const tasks = await Task.find();

	res.status(200).json({
		status: 'success',
		count: tasks.length,
		tasks
	});
};


exports.createTask = async (req, res) => {
	const obj = {
		title: req.body.title,
		description: req.body.description,
		completed: true,
		user: req.user._id
	}
	const task = await Task.create( obj );
	if(!task) return console.log('sorry can\'t create user.');

	res.status(201).json({
		status: 'successfully created',
		task
	});
};


exports.getTask = async (req, res) => {
	// const task = await Task.findById(req.user.id);
	const task = user;
	// await task.populate('user').execPopulate();
	// await task.populate({
	// 	path: 'tasks',
	// 	match: {
	// 		completed: true
	// 	}
	// }).execPopulate();

	res.status(200).json({
		status: 'success',
		task
	});
};


exports.updateTask = async (req, res) => {
	const { title, description } = req.body;

	const task = await Task.findByIdAndUpdate(req.params.id, {title, description}, {
		new: true,
		runValidators: true
	});

	if(!task) return console.log('Update Faild');

	res.status(200).json({
		status: 'Updated Task',
		task
	});
};


exports.deleteTask = async (req, res) => {
	const task = await Task.findOneAndDelete(req.params.id);
	if(!task) return console.log('Error: can\'t delete.');

	res.status(200).json({
		status: 'success',
		task
	});
};


