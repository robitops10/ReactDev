import React, { useState, useEffect } from 'react';

const FetchData = ({login}) => {
	const [ data, setData ] = useState();
	const [ error, setError ] = useState();
	const [ loading, setLoading ] = useState();

	useEffect( () => {
		if(!login) return;

		setLoading(true);
		fetch(`https://api.github.com/users/${login}`)
			.then( res => res.json() )
			.then( setData )
			.then( () => setLoading(false) )
			.then( setError );

	}, [login]);

	if( loading ) return <h2>Loading...</h2>;
	if(!data) return null;
	if(error) return `<pre> ${JSON.stringify(error, null, 2)} </pre>`;


	return(
		<div>
			<h2> Data From Github </h2>

			<div>
				<img src={data.avatar_url} alt={data.login} style={ {width: 200} } />		
				<p>
					name: {data.name} <br />
					name: {data.location} <br />
				</p>
			</div>
		</div>
	);
};

export default FetchData;












// ----------------[  Load Data From Server ]--------------------


// import React, { useState, useEffect } from 'react';

// const FetchData = ({username}) => {
// 	const [ data, setData ] = useState(null);

// 	if (!username) return; 																		// 1st check if failds, then go back, no need to read more
// 	useEffect(
// 		() => {
// 			fetch(`https://api.github.com/users/${username}`)
// 				.then( res => res.json() ) 													
// 				.then( setData ) 																		// .then( json => setData( json )
// 				.catch( console.error	)															// .catch( err => console.error( err) )
// 		},
// 		[username]
// 	);

// 	if (data) return <pre> {JSON.stringify(data, null, 2)} </pre>;

// 	return null; 																							// Remember function must return something
// };

// export default FetchData;




// ----------------[ Save Data into localStorage ]--------------------


// import React, { useState, useEffect } from 'react';

// const loadJSON = key => key == undefined ? undefined : JSON.parse( localStorage.getItem(key) );
// const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));


// const FetchData = ({login}) => {
// 	const [ data, setData ] = useState( loadJSON(`user:${login}`) );

// 	useEffect( () => {
// 		if (!data) return; 									
// 		if (data.login !== login) return; 									

// 		const {name, avatar_url, location } = data;
// 		saveJSON(`user:${login}`, {
// 			name, avatar_url, location, login
// 		});
// 	}, [data] );

// 	useEffect(() => {
// 		if (!login) return; 										
// 		if (data && data.login === login) return; 						// if data !== undefined && data.login = 'robitops10'

// 		fetch(`https://api.github.com/users/${login}`)
// 			.then( res => res.json() ) 													
// 			.then( setData ) 																		// .then( json => setData( json )
// 			.catch( console.error	)															// .catch( err => console.error( err) )
// 		},
// 		[login]
// 	);

// 	console.log( localStorage );
// 	if (data) return <pre> {JSON.stringify(data, null, 2)} </pre>;

// 	return null; 																							// Remember function must return something
// };

// export default FetchData;



