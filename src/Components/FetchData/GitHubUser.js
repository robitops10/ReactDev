import React from 'react';
import Fetch from './Fetch';


// this argument passed into <Fetch /> Component from './Fetch' function
/*
	* 1. Calling Function & passing an argument into ./Fetch Function
	* 2. Defining Function here, & get the Single value as ./Fetch Function Pass
	* 3. <Fetch renderSuccess={userDetails} 	pass function to ./Fetch: this is the Tricky part
				- renderSuccess={userDetails} 			: pass as function reference.
						. returning with a value into it, but no need to capture
				- userDetails = ( {data} ) => ... 	: Get the argument from the captured reference, event not supplied there
						. It is very strange, 
						. <Fetch renderSuccess is just a reference pointer between to point
						. ./Fetch Function pass when calling and userDetails = .. capture & use it.
*/
const userDetails = ( {data} ) => {
	return ( <pre> {JSON.stringify(data, null, 2)} </pre> );
};


const GitHubUser = ( {login} ) => {
	return(
		<Fetch 
			uri={`https://api.github.com/users/${login}`} 
			renderSuccess={userDetails} 											// this function called by Fetch Function & pass an argument 
		/>
	);
};

export default GitHubUser;
