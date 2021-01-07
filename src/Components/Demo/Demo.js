import React from 'react';
import Hello from './demo2';
// import recipes from './../../data/recipes.json';

const data = {
	name 	: 'Riajul islam',
	age 	: 27,
	skill : 'Web Developer'
};

const Demo = ( {name} ) => (
	<div>
		<p> {name} </p>	
		<Hello {...data}  /> 

	</div>
);

export default Demo;
