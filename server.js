var Hapi = require('hapi');

var config = require('./server/config');

var server = new Hapi.Server

server.connection({
  host: config.host,
  port: config.port,
  routes: config.hapi.options.routes
});

var registerOpts = [
  {
  	register: require("./index")
  }
];

var start = function(cb){

  // Add good logging
  /*registerOpts.push({
    register: require("good"),
    options: {
      reporters: [{
    		reporter: require('good-console'),
    		args: [{
    		    request: '*',
    		    log: '*',
    		    error: '*',
    		    ops: '*'
    		}]
      }]
    }
  });*/

  server.register(registerOpts, function(err) {

    if (err) throw err;

    server.start(function() {

      console.log("Server started @ " + server.info.uri.replace('0.0.0.0', 'localhost'));

      if(cb) {

        cb();
      }

    });

  });

}

module.exports = {
  server: server,
  registerOpts: registerOpts,
  start: start
}

if (!module.parent) {

  start();
}	