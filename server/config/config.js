let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
	let config = require('./config.json');
	let endConfig = config[env];

	Object.keys(endConfig).forEach((key) => {
		process.env[key] = endConfig[key];
	});
}