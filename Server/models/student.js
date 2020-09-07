const mongoose = require('mongoose');

const Schema = mongoose.Schema
const studentSchema = new Schema({
  studentName: String,
  rollNo: Number,
  class: String,
  address: String,
  phone: Number,
  gender: String
})

module.exports = mongoose.model('student',studentSchema,'students')