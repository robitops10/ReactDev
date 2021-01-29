const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const schema = new mongoose.Schema({
	user : {
		type: String,
		required: true,
		minlength: 4,
		maxlength: 20
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate : (email) => validator.isEmail(email) 
	},
	password: {
		type: String,
		required: true,
		minlength: 4,	
	},

	confirmPassword: {
		type: String,
		required: true,
		minlength: 4,	
	},

	createdAt: {
		type: Date,
		default: new Date()
	},
	tokens: [{
		token: {
			type: String,
			required: true
		}
	}]
});


schema.methods.getData = function (next) {
// schema.methods.toJSON = function (next) {
	const userObj = this.toObject();

	delete userObj.password;
	delete userObj.tokens;

	return userObj;
}


schema.methods.generateAuthToken = async function () {
	// const user = await User.find(); 		// it also works
	const user = this; 										// more approprate
	const token = jwt.sign( { _id: user._id.toString() }, 'mysalt', { expiresIn: '7 days'} );

	// user.tokens[0].token = {} 											: for multiple login. to logout all, but not current login
	// user.token = token; 														: current login.
	// user.tokens = user.tokens.concat( {token} ); 					
	// await user.save();

	return token;
};


schema.statics.loginByCredientials = async ( email, password ) => {
	const user = await User.findOne({email}); 						// Has access of User Model by how ?

	// if(!user) return new Error('No User find');
	if(!user) return console.log('No User find');

	const isMatched = await bcrypt.compare(password, user.password);
	if( !isMatched ) return console.log('Login Faild');

	return user;
};






schema.pre('save', async function( next ) {
	if( this.password !== this.confirmPassword) next();

	this.password = await bcrypt.hash(this.password, 8);
	this.confirmPassword = undefined;

	next();
});


// schema.pre('findOneAndUpdate', async function(next) {
// 	console.log( 'updated' )

// 	next();
// });





const User = mongoose.model('User', schema);
module.exports = User;






















// ---------------------------------------
// const User = mongoose.model('User', { 							// 1. Designing Model
// 	name: 	{
// 		type: String 
// 	},
// 	email: {
// 		type: String,
// 		required: true,
// 		validate: (email) => validator.isEmail(email) ? email : new Error('Invalid Email')
// 	},
// 	age: 		{
// 		type: Number 
// 	},
// });

// const me = new User({  															// 2. Create Instance
// 	name: 'Riajul Islam', 														// {} = Document == User 'me' 
// 	age: 27
// });

// // me.save() 																				// 3. save instance & as return promise document.
// // 	.then( doc => console.log(doc)) 								// this doc = user document returned by promise 
// // 	.catch(console.log); 														


// // $ node database.js 														// Run Database
