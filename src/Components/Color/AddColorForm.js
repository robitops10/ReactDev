import React from 'react';
import {useInput} from './hooks';



// It’s called a controlled component
const AddColorForm = ( { onNewColor = f => f }	) => {
	const [ titleProps, resetTitle ] = useInput('');
	const [ colorProps, resetColor ] = Input('#000000');
		/* Because we build useInput hook that way,
		* 	. return an array with 2 items
		* 			. 1st one is Object, which has value & onChange event 
		* 			. 2nd one is function, that reset the changes
		*/ 

	const submit = e => {
		e.preventDefault();
		
		onNewColor(titleProps.value, colorProps.value);
		resetTitle();
		resetColor();
	};

	return (
		<form onSubmit={submit} >
			<input {titleProps}  	type="text" placeholder="color title..." required />
			<input {colorProps} 	type="color" required />
			<button>ADD</button>
		</form>
	);
};



export default AddColorForm;
