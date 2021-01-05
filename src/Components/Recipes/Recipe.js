import React from 'react';




const Recipe = (props) => (
	<div>
		<h2>{props.title}</h2>
		<ul>
			{props.list.map(item => <li key={item.id} >{item.item}</li>)}
		</ul>
		<p>{props.summary}</p>
	</div>
);

export default Recipe;
