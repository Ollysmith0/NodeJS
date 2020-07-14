const db = require('../db');

module.exports.login = (req, res) => {
    res.render('auth/login');
};

module.exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = db.get('users').find({ email: email }).value();
    const passwordMatched = db.get('users').find({ password: password }).value();

    if(!user){
        res.render('auth/login', {
            errors: [
                'User not exist'
            ]
        });
    }

    if(!passwordMatched){
        res.render('auth/login', {
            errors: [
                'Password incorrect'
            ]
        });
        return;
    }

    res.cookie('userId', user.id);

    
    res.redirect('/users');
    next();
}