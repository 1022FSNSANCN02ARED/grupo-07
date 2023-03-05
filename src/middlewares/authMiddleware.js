function authtMiddleware (res, req, next) {
    if (!req.session.userLogger) {
        return res.redirect ('/user/login');
    }
    next();
}

module.exports = authtMiddleware;