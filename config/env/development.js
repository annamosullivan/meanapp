var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: 'App ID',
        clientSecret: 'App Secret',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    }
	twitter: {
		clientID: 'API key',
		clientSecret: 'API secret',
		callbackURL: 'http://localhost:1337/oauth/twitter/callback'
	}
};