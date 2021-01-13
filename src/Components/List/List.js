import React from 'react';

const list = (props) => {

	return ( 
		<div>
			<p>
				Name 		: {props.name} 		<br />
				Email 	: {props.email} 	<br />
				avatar 	: {props.avatar} 	<br />
				Image 	: {props.image} 	<br />
				{
					// Image : <img src={props.image} width="50"  /> <br />
				}
			</p>
		</div>
	);
};

export default list;
