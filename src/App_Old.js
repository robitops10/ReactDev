import React, {useState} from 'react';
import Recipe from './Components/Recipes/Recipe';
import Stars from './Components/Star/Star';
import ColorList from './Components/Color/ColorList';
import AddColorForm from './Components/Color/AddColorForm';
import Demo from './Components/Demo/Demo';

import { v4 } from "uuid";






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

const colorData = [
  {
    "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
    "title": "ocean at dusk",
    "color": "#00c4e2",
    "rating": 5
  },
  {
    "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
    "title": "lawn",
    "color": "#26ac56",
    "rating": 3
  },
  {
    "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
    "title": "bright red",
    "color": "#ff0000",
    "rating": 0
  }
];


const foods = data.map( item => <Recipe key={item.id} title={item.title} list={item.list} summary={item.summary} />);


const App = () => {
	const [colors, setColors] = useState(colorData);

	return(
		<div>
			<div className="grid">
				{foods}
				<Stars />

				<ColorList colors={colors} />
				<AddColorForm
					onNewColor={ 
						(title, color) => {
							const newColors = [ ...colors, { id: v4(), rating: 0, title, color } ];
							setColors(newColors);
						}
					}
				/>

			</div>
		</div>
	);
};

export default App;
