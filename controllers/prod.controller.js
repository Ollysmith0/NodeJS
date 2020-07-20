const db = require('../db');

module.exports.index = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const perPage = 8;
    const start = (page - 1) * perPage;
    const end = page * perPage;
    const previousPage = page - 1;
    if(previousPage < 0){previousPage === 0}
    let nextPage = page + 1;
    const lastPage = Math.ceil(db.get('products').value().length / perPage);
    if(page == lastPage){nextPage = 'nope'}

    res.render('products/index', {
        products: db.get('products').value().slice(start, end),
        page: page,
        previousPage: previousPage,
        nextPage: nextPage
    })
};