import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

import './StarRating.css';



// const Star = ( {selected = false}) => {
// 	return (
// 		<FaStar color={selected ? 'red' : 'grey'} />
// 	);
// };

// pass a Fake function so that, it will not throw error, if any function not supplied.
const Star = ( {selected = false, onSelect = f => f }) => (
	<FaStar className='Star' color={selected ? 'red' : 'grey'} onClick={onSelect} />
);


const createArray = (strLength) => [ ...Array( Number(strLength) ) ];

// const StarRating = ( {totalStar = 5} ) => {
// 	return createArray( totalStar ).map( (n, i) => <Star key={i} /> );
// };
const StarRating = ( {totalStar = 5} ) => {
	const [ selectedStars, setSelectedStars ] = useState(0);

	return (
		<div>
			{
				createArray( totalStar ).map( (n, i) => 
					<Star 
							key={i} 
							selected={ selectedStars > i} 
							onSelect={ () => setSelectedStars(i + 1) }
					/> )
			}
			<p> {selectedStars} of {totalStar} </p>
		</div>
	);
};

export default StarRating;
