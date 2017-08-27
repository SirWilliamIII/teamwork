const mongoose = require('mongoose'),
      validator = require('validator'),
      _ = require('lodash'),
      jwt = require('jsonwebtoken'),
      bcrypt = require('bcrypt')

const Schema = mongoose.Schema
const UserSchema = new Schema({

})

const User = mongoose.model('user', UserSchema)

module.exports = User
