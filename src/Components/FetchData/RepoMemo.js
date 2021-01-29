import React, {useEffect} from 'react';
import {useIterator} from './hooks';


const RepoMemo = ({repositories, onSelect = f => f}) => {
	const [ {name}, prev, next ] = useIterator( repositories );  // const [ name, previous, next ] = useIterator( ... );
	// we put name as object so that we pass into onSelect function as Object, others no problems.

	useEffect( () => {
		if (!name) return;
		onSelect( name ); 				// if user change repository name then fire this function.
	}, [name]);

	return(
		<div>
			<button onClick={prev} >&lt;</button>
			<p>{name}</p>
			<button onClick={next} >&gt;</button>
		</div>
	);
};

export default RepoMemo;
