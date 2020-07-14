var express = require('express');
var router = express.Router();

const controller = require('../controllers/user.controller')
const validate = require('../validate/user.validate');
const middleware = require('../middlewares/auth.middleware');

router.get('/', middleware.requireAuth, controller.index);

router.get('/cookie', (req, res, next) => {
    res.cookie('user-id', 111);
    res.send('hello');
})

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate , controller.postCreate)

module.exports = router;