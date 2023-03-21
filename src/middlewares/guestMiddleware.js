function guestMiddleware (res, req, next) {
    if (req.session?.userLogged) {
        return res.redirect ('/users/profile');
    }
    next();
}

module.exports = guestMiddleware;