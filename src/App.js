import React, {useState} from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import './main.css';
import ModalList from './Components/Modal/ModalList';


const Home = (props) => {
	console.log(props);

	return (
		<h2>It is home page</h2>
	);
};

const About = (props) => {
	console.log(props);

	return (
		<h2>About Page: params {props.match.params.id} </h2>
	);
};

const AboutMe = () => (
	<h2> About me </h2>
);

const PageNotFound = () => (
	<h2> 
		404 <a href="/">Anchor</a> <br />
		<Link to="/">Link</Link>
	</h2>
);


const Header = () => (
	<header>
		<NavLink activeClassName='isActive' to='/' exact > Home Page </NavLink>  						<br />
		<NavLink activeClassName='isActive' to='/about/88'> About Page </NavLink> 			<br />
		<NavLink activeClassName='isActive' to='/unknown'>  PageNotFound </NavLink> 	<br />
	</header>
);





const App = () => { 
	const [isOpen, setIsOpen] = useState(false)
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path='/' component={Home}  />
				<Route path='/about/:id' component={About} />
				<Route path='/about/page' component={AboutMe} />
				<Route component={PageNotFound} />
			</Switch>

			<button onClick={ () => setIsOpen(true) }>Show Modal</button>
			<ModalList 
				selectedOption={isOpen} 
				closeModal={setIsOpen}
			/>

		</BrowserRouter>
	);
};

export default App;
