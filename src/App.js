import React from 'react';
import Recipe from './Components/Recipes/Recipe';
import Stars from './Components/Star/Star';
import Demo from './Components/Demo/Demo';

const data = [
	{
		id: 1,
		title: 'Chicken Noodls Soup',
		list: [
			{ id: 'item_1.1', item: 'item 1'},
			{ id: 'item_1.2', item: 'item 2'},
			{ id: 'item_1.3', item: 'item 3'},
			{ id: 'item_1.4', item: 'item 4'}
		],
		summary: 'Summary of Chicken Noodls Soup'
	},
	{ 
		id: 2,
		title: 'Curried Egg Salad',
		list: [
			{ id: 'item_2.1', item: 'item 1'},
			{ id: 'item_2.2', item: 'item 2'},
			{ id: 'item_2.3', item: 'item 3'},
			{ id: 'item_2.4', item: 'item 4'}
		],
		summary: 'Summary of Curried Egg Salad'
	},
	{ 
		id: 3,
		title: 'Oat Cluster',
		list: [
			{ id: 'item_3.1', item: 'item 1'},
			{ id: 'item_3.2', item: 'item 2'},
			{ id: 'item_3.3', item: 'item 3'},
			{ id: 'item_3.4', item: 'item 4'}
		],
		summary: 'Summary of Oat Cluster'
	}
];

const foods = data.map( item => <Recipe key={item.id} title={item.title} list={item.list} summary={item.summary} />);


// const ObjectLiteral = ( {name} ) => {
// 	return name;
// };




const App = () => {
	return(
		<div className="grid">
			{foods}
			<Stars />
			<Demo name='Module Name' />
		</div>
	);
};

export default App;
