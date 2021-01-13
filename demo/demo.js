
// const userDetails = ( {data} ) => { 				// => Function 1
// 	console.log( data )
// };

// const Fetch = ( {data} ) => { 							// => Function 2
// 	userDetails( {data} ); 							
// }

// Fetch( {data: 'riajul'} );
// 	// - call the func 2 & pass the data to func 1, & call that func1 too.




const userDetails = ( {data} ) => { 				// => Function 1
	console.log( data )
};


const gitHubUser = ( {data} ) => { 				// => Function 2
	Fetch( {data} )
};

const Fetch = ( {data} ) => { 							// => Function 3
	userDetails( {data} );
}


gitHubUser( {data: 'riajul'} );

	// - call the func_2 & pass the data to func_3, & call that func_3.
	// - Now func_3, pass the data to func_1, & call that func_1 too.


