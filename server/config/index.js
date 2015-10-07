/**
* Dependencies.
*/
var path = require('path'),

rootPath = path.normalize(__dirname + '/../..');

var pjson = require('../../package.json');

console.log('version', pjson.version);

console.log('node env', process.env.NODE_ENV);

//set template render chaching to false on dev
if(process.env.NODE_ENV == 'development'){

	swig.setDefaults({ cache: false });
}

var config = {
	root: rootPath,
	host: '0.0.0.0',
	port: parseInt(process.env.PORT, 10) || 3000,
	api: '',
	title: 'reciP',
	package: pjson,
	hapi: {
		options: {
			routes: {
				cors: true
			}
		}
	}
}

config.env = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'development';

switch(config.env){

	case 'dev':
	case 'prod':
	default:

		config.api = 'http://localhost:' + config.port;
		break;

}



config.serveBuild = (config.env === "prod");

// Defaults that you can access when you require this config.
module.exports = config;
