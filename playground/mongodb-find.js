// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server', err);
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID("5a233e5f8e288c0a486a76f2")
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos', err);
	// });	

	db.collection('Users').find({
		name: 'Nebojsa Zlatanovic'
	}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});

	// db.close();
});