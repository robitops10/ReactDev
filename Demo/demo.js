
const sort = {};


const query = 'createdAt:des';

const parts = query.split(':');
sort[ parts[0] ] = parts[1] === 'desc' ? -1 : 1;


console.log( parts )
console.log( sort )
