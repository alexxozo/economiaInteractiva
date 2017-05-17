const Lectie = require('../models/lectie')

module.exports = {

  getLectii: (req, res) => {
    Lectie.find({}, (err, lectii) => {
      if(err) {
        console.err(err)
      }
      res.json(lectii)
    })
  },

  createLectie: (req, res) => {
    var lectie = new Lectie()
    lectie.titlu = req.params.titlu
    lectie.poza = req.params.poza

    lectie.save((err, savedLectie) => {
      if(err) {
        console.log(err)
      }
      res.json(savedLectie)
    })
  },

  setRating: (req, res) => {
    var update = {}
    update[req.params.field + 's'] = parseInt(req.params.rating)
    Lectie.findOneAndUpdate( {titlu: req.params.titlu }, { $inc: update }, (err, lectie) => {
      if(err) {
        console.err(err)
      }
      res.json(lectie)
    })
  }
}
