const mongoose = require('mongoose');

const schema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	}

},
{
	timestamps: true 						// add 2 property : createdAt: Date , updatedAt: Date	
});

const Task = mongoose.model('Task', schema);

module.exports = Task;
