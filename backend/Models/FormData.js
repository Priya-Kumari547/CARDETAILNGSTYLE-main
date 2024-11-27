const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  suburb: String,
  note:String,
  ServiceTitle : String,
  photos: [{ type: String }]

});

module.exports = mongoose.model('FormData', formDataSchema);
