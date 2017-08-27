const express    = require('express'),
      path       = require('path'),
      bodyParser = require('body-parser'),
      logger     = require('morgan'),
      _          = require('lodash')


const mongoose = require('./db/mongoose')

const router = express.Router()

const app = express()
const port = process.env.PORT || 3000

const routes = require('./router/routes');

app.use('file/uploads', express.static(__dirname + '/uploads'))

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/upload-node')
app.use('/', routes)




app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
