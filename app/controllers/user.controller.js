const User = require('../models/user')

module.exports = {

  getUsers: (req, res) => {
    User.find({}, (err, users) => {
      if(err) {
        console.err(err)
      }
      res.json(users)
    })
  },

  createUser: (req, res) => {
    var user = new User()
    user.nume = req.params.nume
    user.procentaj = req.params.procentaj

    user.save((err, savedUser) => {
      if(err) {
        console.log(err)
      }
      res.json(savedUser)
    })
  }
}
