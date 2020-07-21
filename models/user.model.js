const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const userSchema = new Schema({
  name: String,
  phone: String,
  id: ObjectId,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;