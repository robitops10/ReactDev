const mongoose = require('mongoose');
const chalk = require('chalk');

// (1) 							(2) 						(3) 					(4) 				(5)
mongoose.connect('mongodb://localhost:27017/task-manager-api', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false 							// Not use this depricated Method, warning will be disabled
})
	.then( success => console.log( chalk.green('Database Connection Successfull')) )
	.catch( error => console.log( chalk.red(`Database Connection Error: ${error.message}`)) );

/*
	1: mongoose = module.exports = {...}
	2: mongodb protocol 									: same as http protocol.
	3: IP:Port 														: IP:TCP
	4: Database name 											: Will Auto create in Database
	5: Options: {...} 										: 
*/

