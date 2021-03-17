const expressJwt = require('express-jwt');

const authJwt = () => {
    const secret = process.env.secret;

    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS']},
            '/api/v1/users/login',
            '/api/v1/users/register',
        ]
    })
}

const isRevoked = async (req, payload, done) => {
    if (!payload.isAdmin) done(null, true);

    done();
}

module.exports = authJwt;