const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost/medotodo', err => {
	if(err) {
		console.log(err)
	} else {
		console.log('We are connected to the database!')
	}
})

module.exports = mongoose
