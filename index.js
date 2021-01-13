const axios = require('axios');
let faker = require('faker');



const bigList = [...Array(5)].map( () => ({
	name: faker.name.findName(),
	email: faker.internet.email(),
	avatar: faker.internet.avatar()
}));

console.log( bigList );
