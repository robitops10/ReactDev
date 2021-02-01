const User = require('./../models/user');


exports.userLogin = async (req, res) => {
	const {email, password} = req.body;

	const user = await User.loginByCredientials(email, password);
	const token = await user.generateAuthToken();

	const data = {
		status: 'Login success',
		data : { user, token }
	};

	res.status(200).json( data );
};



exports.uploadSingle = (req, res) => {
	res.status(200).json({
		status: 'File uploaded Success'
	});
};











	// GET 	users/?completed=true
	// GET 	users/?limit=10&skip=2
	// GET 	users/?sort=-1
	// GET 	users/?sortBy=createdAt:desc 									// Custom sort

exports.getUserProfile = async (req, res) => { 					// (2) : CRUD: R => Read
	// const user = await User.findById(req.params.id);
	const user = req.user;
	// await user.populate('tasks').execPopulate();

	const match = {};
	if( req.query.completed ) {
		match.completed = Boolean(req.query.completed); 
	}


	const sort = {}; 			
	if(req.query.sortBy) {
		const parts = req.query.sortBy.split(':');
		// sort[parts[0]] = sort[parts[1]]  										// => { sort[createdAt] : 'desc' }
		sort[parts[0]] = parts[1] === 'desc' ? -1 : 1; 					// => { sort[createdAt] : -1 }
	}

	console.log( {sort})


	await user.populate({
		path: 'tasks',
		// match: { completed: true }
		match,
		options: {
			limit: parseInt( req.query.limit ),
			skip: parseInt( req.query.skip ),
			// sort: { createdAt: -1 } 													// 1 = ASC, -1=DISC 		(Static)
			// sort: { createdAt: parseInt(req.query.sort) } 		// Dynamic
			sort 																								// Custom data sort= {createdAt: -1}
		}
	}).execPopulate();

	const data = {
		status: 'success',
		data: {user, numberOfTasks: user.tasks.length, tasks: user.tasks } 
	};

	res.status(200).json( data );
};



exports.getUsers = async (req, res) => { 							// (1) : Get All
	const users = await User.find();

	const data = {
		status: 'success',
		count: users.length,
		users
	};

	res.status(200).json( data );
};



exports.createUser = async (req, res) => { 						// (1) : CRUD: C => Create
	const user = await User.create(req.body);

	const data = {
		status: 'New user Added',
		user
	};

	res.status(201).json( data );
};



// did not hashed password on update
exports.updateUser = async (req, res) => { 					// (3) : CRUD: U => Update
	const user = await User.findByIdAndUpdate(req.user._id, req.body, {
		new: true, 										// Return new Document after updated
		runValidators: true 					// Enable Schema's validator, on Update time too
	});

	const data = {
		status: 'Updated',
		user
	};

	res.status(200).json( data );
};



exports.deleteUser = async (req, res) => { 					// (3) : CRUD: U => Update
	const user = await User.findByIdAndDelete(req.user._id);

	const data = {
		status: 'Deleted',
		user
	};

	res.status(200).json( data );
};








