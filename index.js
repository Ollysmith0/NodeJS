require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userRoutes = require('./routes/user.route');
const authRoutes = require('./routes/auth.route');
const prodRoutes = require('./routes/prod.route');
const cartRoutes = require('./routes/cart.route');

const sessionMiddleware = require('./middlewares/session.middleware');

const port = 4000;

const app = express();
const apiProdRoute = require('./api/route/product.route');
app.use(express.static('public'));
app.use(cookieParser(process.env.SECRET));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(sessionMiddleware);

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'test', message: 'My name is Oil'
    })
})

app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/products', prodRoutes);
app.use('/cart', cartRoutes);
app.use('/api/products', apiProdRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));