import React, { useState, useEffect, useCallback, useMemo } from 'react';

export function useFetch(uri) {
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!uri) return;

		fetch(uri)
		.then(data => data.json())
		.then(setData)
		.then(() => setLoading(false))
		.catch(setError);

		}, [uri] 
	);

	return { loading, data, error };
}



// // Allow to loop throw array.
// // const [letter, previous, next ] = useIterator( ['a', 'b', 'c'] );
// export const useIterator = ( items = [], initialIndex = 0 ) => {
// 	const [ i, setIndex ] = useState( initialIndex );

// 	const prev = () => {
// 		if( i === 0 ) return setIndex( items.length - 1 ); 	// last item
// 		setIndex( i - 1 );
// 	};

// 	const next = () => {
// 		if( i === items.length-1 ) return setIndex( 0 ); 	
// 		setIndex( i + 1 );
// 	};

// 	return [ items[i], prev, next ];
// };




// By using useCallback() & useMemo()
// 	- put function into useCallback( ) function, 	same as useEffect
// 	- put items[i] into useMemo( ) function, 			same as useEffect
export const useIterator = ( items = [], initialIndex = 0 ) => {
	const [ i, setIndex ] = useState( initialIndex );

	const prev = useCallback( () => { 											
		if( i === 0 ) return setIndex( items.length - 1 ); 	
			setIndex( i - 1 );
		}, [i]
	);

	const next = useCallback( () => {
		if( i === items.length-1 ) return setIndex( 0 ); 	
			setIndex( i + 1 );
		}, [i]
	);

	const item = useMemo( () => items[i], [i]);
	return [ item || items[i], prev, next ];
};

