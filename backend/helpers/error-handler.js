

const errorhandler = (err, req, res, next) => {

    // JWT authentication error
    if (err.name === 'UnauthorizedError') res.status(401).json({message: 'The user is not authorized'});

    // Validation error
    if (err.name === 'ValidationError') res.status(401).json({message: err});

    // Else, default to 500 server error.
    return res.status(500).json(err);
}

module.exports = errorhandler;