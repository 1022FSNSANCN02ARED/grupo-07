function authtMiddleware (res, req, next) {
    if (!req.session.userLogged) {
        return res.redirect ('/users/login');
    }
    next();
}

module.exports = authtMiddleware;