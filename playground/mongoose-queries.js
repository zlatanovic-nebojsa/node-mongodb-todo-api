const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5a2352485a38b31498815a4e';

User.findById(id).then((user) => {
	if (!user) {
		return console.log('Id not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((err) => console.log(err));

// var id = '5a235fdd0e327004d4d4044611';

// if (!ObjectID.isValid(id)) {
// 	console.log('Invalid ID');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id', todo);
// }).catch((err) => console.log(err));

