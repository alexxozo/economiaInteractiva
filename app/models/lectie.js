const mongoose = require('mongoose'),
      Schema = mongoose.Schema

var LectieSchema = new Schema({
  titlu: { type: String, unique: true, required: true },
  poza: { type: String, required: true },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 }
})

module.exports = mongoose.model('Lectie', LectieSchema)
