exports.getLogin = (req, res, next) => {
    //Getting cookie value (isLoggedIn)
    const isLoggedIn = req.get('Cookie').split('=')[1]
        res.render('auth/login', {
            path: '/login',
            pageTitle: 'Login',
            isAuthenticated: isLoggedIn
        });
};

exports.postLogin = (req, res, next) => {
    res.setHeader('Set-Cookie', 'loggedIn=true; Max-Age=600')
    res.redirect('/')
};