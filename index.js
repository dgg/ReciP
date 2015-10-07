// This is the hapi plugin version to be included in other projects

// Dependencies
var Hapi = require('hapi');

// Server Config
var config = require('./server/config');

// Hapi Server Plugins
var plugins = require('./server/config/plugins');

exports.register = function(server, options, next) {

	server.register(plugins, function(err) {

	    if (err) return next(err);

	    server.route(require('./server/routes')(server, options));

	    next();

	});

};

var Package = require("./package.json");
exports.register.attributes = {
    name: 	Package.name,
    version: 	Package.version
}