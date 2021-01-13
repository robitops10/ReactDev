import React, { useState, useRef } from 'react';



// It’s called a uncontrolled component
const AddColorForm = ( { onNewColor = f => f }	) => {
	const textTitle = useRef()
	const hexColor = useRef()

	const submit = e => {
		e.preventDefault();

		const title = textTitle.current.value;
		const color = hexColor.current.value;
		onNewColor(title, color);

		textTitle.current.value = '';
		hexColor.current.value = '';

	};
};


// It’s called a controlled component
const AddColorForm = ( { onNewColor = f => f }	) => {
	const [ title, setTitle ] = useState('');
	const [ color, setColor ] = useState('#000000');

	const submit = e => {
		e.preventDefault();

		onNewColor(title, color);

		setTitle('');
		setColor('');

	};
};

// See custom hooks, which make this little bit easier. 
// Color/hooks.js




const Demo = ( ) => (
	<div>
		<h3> For uncontrolled component </h3>
		<form onSubmit={submit} >
			<input ref={textTitle} type="text" placeholder="color title..." required />
			<input ref={hexColor} type="color" required />
			<button>ADD</button>
		</form>


		<h3> For controlled component </h3>
		<form onSubmit={submit} >
			<input value={title} onChange={(e) => setTitle(e.target.value) } type="text" placeholder="color title..." required />
			<input value={color} onChange={(e) => setColor(e.target.value) } type="color" required />
			<button>ADD</button>
		</form>
	</div>
);

export default Demo;

