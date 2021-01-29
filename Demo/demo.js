const obj = {
	// name: 'android',
	// toJSON : () => 'Hello'
};

obj.toJSON = () => 'Hello';

const data = JSON.stringify( obj );
console.log( data )
