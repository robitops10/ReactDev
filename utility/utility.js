const jwt = require('jsonwebtoken');
const User = require('./../models/user');

const catchAsync = f => {
	// return (req, res, next) => f(req, res, next).catch( next )
	return (req, res, next) => f(req, res, next).catch( next )
};


// (catchAsync( async (req, res, next) => {
// 	console.log( req, res, next )
// }))('a', 'b', 'c');



const auth = async (req, res, next) => {
	const token = req.headers.authorization.replace('Bearer ','');
	if(!token) return console.log('Please login First.');

	const verify = jwt.verify(token, 'mysalt')
	if(!verify) return console.log('Don\'t play with token.' );

	const user = await User.findById( verify._id );
	if(!user) return console.log('Can not connect to Database');

	req.user = user;
	next();
};






module.exports = { catchAsync, auth };





