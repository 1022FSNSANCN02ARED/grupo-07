function guestMiddleware (res, req, next) {
    if (req.session.userLogger) {
        return res.redirect ('/user/profile');
    }
    next();
}

module.exports = guestMiddleware;