var Config = require('../config');
var _ = require('underscore-node');


module.exports = function(server, options) {

	var routers;

	if (Config.serveBuild) {

		routers = [
			'./api',
			'./base'
		];

	} else {

		routers = [
			'./api',
			'./base'
		];
	}


	var routes = [];
	var tmpRoute;

	_.each(routers, function(route){

		tmpRoute = require(route);

		if (typeof tmpRoute === 'function') {
			tmpRoute = tmpRoute(server, options);
		}

		routes = routes.concat(tmpRoute);
	});

	return routes;
}
