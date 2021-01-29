const fs = require('fs');
const chalk = require('chalk');

const success = f => chalk.green.bold(f);
const failed = f => chalk.red.bold(f);
const warning = f => chalk.yellow(f);

const noteFile = 'notes.json';


const getNotes = () => {
	const notes = loadNotes();

	console.clear();
	console.log( {countNotes: notes.length, notes} );
};

const addNote = ( {title, body = ''} ) => {
	const notes = loadNotes();
	const duplicateFound = notes.find( note => note.title == title );
	if( duplicateFound ) return console.log( warning(`Already exist this title : ${title}`) );

	notes.push( {title, body} );
	const isSuccess = saveNotes( notes ); 		// passing whole array

	if( !isSuccess ) return new Error( faild('Sorry, We can\'t save note in file.' ) );

	console.log( success(`Successfully added: ${ title} : ${body}`) );
};

const saveNotes = ( [...notes] ) => {
	const notesJSON = JSON.stringify(notes, null, 2);
	fs.writeFileSync(noteFile, notesJSON, 'utf-8');
	return true;
};

const loadNotes = () => {
	try {
		const notes = fs.readFileSync(noteFile, 'utf-8');
		return JSON.parse(notes);
	} catch( err) {
		return []; 						// if data then array or empty array
	}
};



const removeNote = ( {title, body} ) => {
	const notes = loadNotes();

	/* 
		After Get all notes but current one. Chaking many ways:
			1. notes.length > matchFound.length  			[ because one note not fetched ]
			2. notes.length === matchFound.length + 1;
			3. Find with options is exists or not,
					. if not exist then nothing to do
					. if exist then remove by finding matched.
	*/

	const matchFound = notes.find( note => note.title === title );

	if( !matchFound ) return console.log('There is no entry')
	const updateNote = notes.filter( note => note.title !== title );

	saveNotes( updateNote );
	console.log( success('Success: This Removed Node') )	
};


const updateNote = ( {title, replaceWith} ) => {
	const notes = loadNotes();
	const updateNote = notes.filter( note => note.title == title );

	// updateNote.title = replaceWith;
	const replaced = updateNote.map( note => note.title = replaceWith );

	console.clear();
	console.log( {replaced} );
	// console.log( {title, replaceWith} );
};



module.exports = { getNotes, addNote, removeNote, updateNote };
