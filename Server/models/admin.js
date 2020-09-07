const mongoose = require('mongoose');

const Schema = mongoose.Schema
const adminSchema = new Schema({
  name: String,
  address: String,
  address2: String,
  city: String,state: String,
  city: String,zip: String,
  userName: String,
  password: String
})

module.exports = mongoose.model('admin', adminSchema,'admins')