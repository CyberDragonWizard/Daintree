const expressJwt = require('express-jwt');

const authJwt = () => {
    const secret = process.env.secret;

    return expressJwt({
        secret,
        algorithms: ['HS256'],
    }).unless({
        path: [
            {url: /\/api\/products(.*)/, methods: ['GET', 'OPTIONS']},
            {url: /\/api\/categories(.*)/, methods: ['GET', 'OPTIONS']},
            '/api/v1/users/login',
            '/api/v1/users/register',
        ]
    })
}

module.exports = authJwt;