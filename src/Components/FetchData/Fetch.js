import React from 'react';
import {useFetch} from './hooks';

const Fetch = ({
	uri, 																																			// required variable
	renderSuccess, 																														// required function
	loadingFallback = <p>loading...</p>, 																			// optional
	renderError = error => ( <pre>{JSON.stringify(error, null, 2)}</pre> ) 		// optional 		
}) => {
	const { loading, data, error } = useFetch(uri);
	if (loading) return loadingFallback;
	if (error) return renderError(error);
	if (data) return renderSuccess({ data }); 																// Call renderSuccess() & pass 1 argument as Object
}

export default Fetch;
