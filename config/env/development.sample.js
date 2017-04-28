module.exports = {
    sessionSecret: 'XXXXXXXXXXXX',
    db: 'mongodb://localhost/Database Name',
    facebook: {
        clientID: 'Application Id',
        clientSecret: 'Application Secret',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'Application Id',
        clientSecret: 'Application Secret',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    },
    google: {
        clientID: 'Application Id',
        clientSecret: 'Application Secret',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};