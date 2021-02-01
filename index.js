require('./models/database');
const path = require('path');
const express = require('express');
const chalk = require('chalk');
const multer = require('multer');

const userRouter = require('./route/user');
const taskRouter = require('./route/task');


const port = process.env.PORT || 3000;
const publicPath = path.resolve('public');

const app = express();

app.use( express.json() )
app.use( express.static(publicPath) );
app.set('views', './views');
app.set('view engine', 'pug');




const upload = multer({
	dist: 'images'
});

app.post('/upload', upload.single('avatar'), (req, res) => {
	res.status(200).json({
		status: 'success upload'
	});
});




app.use('/users', userRouter);
app.use('/tasks', taskRouter);





app.get('/', (req, res) => {
	res.status(200).render('home', {
		status: 'success',
		title: 'About Page'
	});
});



app.get('/about', (req, res) => {
	res.status(200).render('about', {
		status: 'success',
		title: 'About Page'
	});
});


app.get('/products', (req, res) => {
	const	data = 'fetched from database';
	if(!data) return res.status(200).json({error: 'Error Message'}); 	
	res.status(200).json( {status: 'success', data });		
});










app.listen(port, () => console.log( chalk.white.bold(`Server Running on port: ${port}.`)) );
