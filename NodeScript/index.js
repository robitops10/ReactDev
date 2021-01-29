const yargs = require('yargs');
const { getNotes, addNote, removeNote, updateNote } = require('./utils');

yargs.command({
	command: 'add',
	describe: 'Add Command',
	builder: {
		title: {
			describe: 'Title Option',
			demandOption: true,
			type: 'string'
		}
	},
	// passing full object
	handler: (argv) => addNote( argv )  				
});

yargs.command({
	command: 'remove',
	describe: 'Remove Command',
	builder: {
		title: {
			describe: 'Remove Option',
			demandOption: true,
			type: 'string'
		}
	},
	handler: removeNote 			// Long Form: handler: (argv) => removeNote( argv )
});


yargs.command({
	command: 'update',
	describe: 'Update Command',
	builder: {
		title: {
			describe: 'Title Option',
			demandOption: true,
			type: 'string'
		},
		replaceWith: {
			describe: 'Replace Option',
			demandOption: true,
			type: 'string'
		}
	},
	handler : updateNote
});



yargs.command({
	command: 'show',
	describe: 'Show All Notes',
	handler: getNotes
})


yargs.parse();
