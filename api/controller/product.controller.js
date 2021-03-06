const Product = require('../../models/product.model');

module.exports.index = async (req, res, next) => {
    try{
        const products = await Product.find();
        res.json(products);
    }
    catch(error){
        next(error);
    }
};

module.exports.create = async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
}

