exports.getLogin = (req, res, next) => {
    //Getting cookie value (isLoggedIn)
    // const isLoggedIn = req.get('Cookie')?.split('=')[1]
    console.log(req.session.isLoggedIn);
    const isLoggedIn = req.session.isLoggedIn
        res.render('auth/login', {
            path: '/login',
            pageTitle: 'Login',
            isAuthenticated: isLoggedIn
        });
};

exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true
    res.redirect('/admin/products')
};

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
      path: '/signup',
      pageTitle: 'Signup',
      isAuthenticated: false
    });
  };

exports.postSignup = (req, res, next) => {};
