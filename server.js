const express = require('express'),
      app = express(),
      path = require('path'),
      logger = require('morgan'),
      mongoose = require('mongoose'),
      lectiiController = require('./app/controllers/lectii.controller'),
      userController = require('./app/controllers/user.controller')

//var cors = require('cors'); //simi

app.use(logger('dev'))
app.set('port', process.env.PORT || 3000)

//app.use(cors()); //simi

app.use(express.static(path.join(__dirname, '/eco')))

mongoose.connect('localhost:27017/lectii', (err) => {
  if(err) {
    console.log(err)
  }else{
  console.log(`Aplicatia este conectata la baza de date a lectiilor.`)}
})

app.get('/', (req, res) => {
  res.redirect('/views/main.html')
//simi
  res.writeHead(200, {'Content-Type': 'text/plain'});
  contents = fs.readFileSync('sliderImages.json', 'utf8');
  res.end(contents);
})
app.get('/lectii', lectiiController.getLectii)
app.post('/lectii/:titlu/:poza', lectiiController.createLectie)
app.post('/lectii/:titlu/:field/:rating', lectiiController.setRating)

app.get('/users', userController.getUsers)
app.post('/users/:nume/:procentaj', userController.createUser)

app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}.`)
})
