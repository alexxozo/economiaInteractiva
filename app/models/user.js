var mongoose = require('mongoose'),
      Schema = mongoose.Schema

var UserSchema = new Schema({
  nume: { type: String, unique: true, required: true },
  procentaj: { type: Number, required: true }
})

module.exports = mongoose.model('User', UserSchema)
