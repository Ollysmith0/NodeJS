const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    id: { type: String },
    products: { type: String, default: 'mongoose' },
    image: { type: String },
    description: { type: String },
  });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
