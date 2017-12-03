// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server', err);
	}
	console.log('Connected to MongoDB server');

	// findOneAndUpdate
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a233eea45f6e71c342ffea7')
	},{
		$set: {
			name: 'Nebojsa'
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	// db.close();
});