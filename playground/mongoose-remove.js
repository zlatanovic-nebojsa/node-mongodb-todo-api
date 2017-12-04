const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// remove all
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// remove one
// Todo.findOneAndRemove({_id: '5a24a9f29af13f32adc6b2b9'}).then((todo) => {
	// console.log(todo);
// });

// remove by id
// Todo.findByIdAndRemove('5a24a9f29af13f32adc6b2b9').then((todo) => {
// 	console.log(todo);
// });