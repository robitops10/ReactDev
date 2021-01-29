import React from 'react';

// const loadReadme = ( {login, repo} ) => {
// 	const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
// 	fetch(uri).then( res => res.json() )
// 		.then( data => {
// 			const {download_url} = data;
// 			console.log( download_url );
// 		})
// 		.catch( console.error )
// };


// Enable asynn/await into babel by 'babel-polyfill' 
const LoadReadme = async ( {login, repo} ) => {
	try {
		const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
		const {download_url} = await fetch(uri).then( res => res.json() );
		const markdown = await fetch(download_url).then( res => res.text() );

		console.log( markdown );

	} catch( err ) {
		console.error( err );
	}
};




export default LoadReadme;

