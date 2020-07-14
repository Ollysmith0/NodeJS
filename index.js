const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');

const port = 4000;

const app = express();
app.use(cookieParser());
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'test', message: 'My name is Oil'
    })
})

app.use('/users', userRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));