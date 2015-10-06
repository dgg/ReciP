var gulp = require("gulp");
var nodemon = require("gulp-nodemon");

// the default task that is run with the command 'gulp'
gulp.task('default', [], function(){

  console.log('do front-end-y stuff');
});


gulp.task('serve', function(){

	nodemon({
		script: 'server.js',
		ext : 'js',
		env : {'NODE_ENV' : 'dev'},
		watch : ['server/', 'test']
	});
  // Get server
  /*var server = require('./server.js');

  //Start it
  Starter.start();*/

});