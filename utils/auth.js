const withAuth = (req, res, next) => {
    // when a user is not logged in, they will be redirected to the login route
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;