exports.register = (server, options, next) => {

	process.once('SIGUSR2', function() {
		process.kill(process.pid);
	});

	return next();
};

exports.register.attributes = {
	connections: false,
	pkg: require('./package.json')
};