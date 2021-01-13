import React from 'react';
import './Recipe.css';


const Recipe = (props) => (
	<div className="card">
		<h4 className="card-title">{props.title}</h4>
		<ul>
			{props.list.map(item => <li key={item.id} >{item.item}</li>)}
		</ul>
		<p>{props.summary}</p>
	</div>
);

export default Recipe;


