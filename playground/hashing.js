// const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
	id: 23
};

var token = jwt.sign(data, 'secretcode123abc');
console.log(token);

var decoded = jwt.verify(token, 'secretcode123abc');
console.log(decoded);

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
// 	id: 4
// };

// var token = {
// 	data,
// 	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };


// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if (resultHash === token.hash) {
// 	console.log('Data was not changed');
// } else {
// 	console.log('Data was chenged. Don\'t trust!');
// }