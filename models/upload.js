const mongoose  = require('mongoose'),
      validator = require('validator'),
      _         = require('lodash'),
      jwt       = require('jsonwebtoken'),
      bcrypt    = require('bcrypt')

const Schema = mongoose.Schema

const UploadSchema = new Schema({
	path:         {
		type:     String,
		required: true,
		trim:     true
	},
	originalname: {
		type:     String,
		required: true
	}
})


const Upload = mongoose.model('files', UploadSchema)

module.exports = Upload
