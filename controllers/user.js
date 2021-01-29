const User = require('./../models/user');


const userLogin = async (req, res) => {
	const user = await User.loginByCredientials(req.body.email, req.body.password);
	const token = await user.generateAuthToken();


	const data = {
		status: 'Login success',
		data : { user, token }
	};

	res.status(200).json( data );
};

const getUsers = async (req, res) => { 							// (1) : Get All
	const users = await User.find();

	const data = {
		status: 'success',
		count: users.length,
		users
	};

	res.status(200).json( data );
};


const createUser = async (req, res) => { 						// (1) : CRUD: C => Create
	const user = await User.create(req.body);

	const data = {
		status: 'New user Added',
		user
	};

	res.status(201).json( data );
};


const getUserById = async (req, res) => { 					// (2) : CRUD: R => Read
	const user = await User.findById(req.params.id);

	const userData = user.getData();
	console.log( userData );


	const data = {
		status: 'success',
		user : userData
		// user 
	};

	res.status(200).json( data );
};




const updateUser = async (req, res) => { 					// (3) : CRUD: U => Update
	const user = await User.findByIdAndUpdate(req.params.id, req.body, {
		new: true, 										// Return new Document after updated
		runValidators: true 					// Enable Schema's validator, on Update time too
	});

	const data = {
		status: 'Updated',
		user
	};

	res.status(200).json( data );
};



const deleteUser = async (req, res) => { 					// (3) : CRUD: U => Update
	const user = await User.findByIdAndDelete(req.params.id);

	const data = {
		status: 'Deleted',
		user
	};

	res.status(200).json( data );
};








module.exports = {getUsers, createUser, getUserById, updateUser, deleteUser, userLogin};
