function guestMiddleware (res, req, next) {
    if (req.session?.userLogged) {
        return res.redirect ('/user/profile');
    }
    next();
}

module.exports = guestMiddleware;