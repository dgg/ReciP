// This is the base controller. Used for base routes, such as the default index/root path, 404 error pages, and others.
module.exports = {

	index: {
		handler: function(request, reply){

			reply('Hello, world!');

		}
	},

	missing: {
		handler: function(request, reply){
			reply('404').code(404);
		}
	}

}
