const db = require('../db');
const md5 = require('md5');

module.exports.login = (req, res) => {
    res.render('auth/login');
};

module.exports.postLogin = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = md5(password);
    const user = db.get('users').find({ email: email }).value();
    const passwordMatched = db.get('users').find({ password: hashedPassword }).value();

    console.log(hashedPassword);

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

    res.cookie('userId', user.id, {
        signed: true
    });

    
    res.redirect('/users');
    next();
}