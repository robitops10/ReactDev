import React, {useState, useEffect} from 'react';
// import faker from 'faker';
import {FixedSizeList} from 'react-window';

import FetchData from './Components/FetchData/FetchData';
import GitHubUser from './Components/FetchData/GitHubUser';
import List from './Components/List/List';


// const bigData = [...Array(5)].map( () => ({
// 	name: faker.name.findName(),
// 	email: faker.internet.email(),
// 	image: faker.image.image(),
// 	avatar: faker.image.avatar()
// }));

	// const data = bigData.map( (item, index) => <List 
	// 	key={index} 
	// 	name={item.name} 
	// 	email={item.email} 
	// 	image={item.image} 
	// 	avatar={item.avatar} 
	// />);




const App = () => {

	return(
		<div>
			<h2>Fetch Data </h2>	
			<GitHubUser login='robitops10' />
		</div>
	);
};

export default App;
