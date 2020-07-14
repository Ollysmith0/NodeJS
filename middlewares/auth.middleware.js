const db = require('../db');
const { signedCookie } = require('cookie-parser');

module.exports.requireAuth = (req, res, next) => { 
    console.log(req.signedCookies, req.cookie);
    if(!req.signedCookies.userId){
        res.redirect('auth/login');
        return;
    }
    
    const user = db.get('users').find({ id: req.signedCookies.userId }).value();

    if(!user){
        res.redirect('auth/login');
        return;
    }

    res.locals.user = user;

    next();
}