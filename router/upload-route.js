const express = require('express'),
      multer  = require('multer')

const router = express.Router()

const Upload = require('../models/upload')

router.getUploads = function (callback, limit) {
	Upload.find(callback).limit(limit);
}
router.getUploadById = function (id, callback) {
	Upload.findById(id, callback);
}
router.addUpload = function (image, callback) {
	Upload.create(image, callback);
}

var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/')
	},
	filename:    function (req, file, cb) {
		cb(null, file.originalname);
	}
});

const upload = multer({
	storage: storage
});

router.get('/files', (req, res) => {
	routes.getFiles((err, categories) => {
		if(err) {
			throw err
		}
		res.json(categories)
	})
})

router.get('/', function (req, res) {
	res.sendFile(__dirname + '/form.html');
});

router.post('/', upload.any(), function (req, res, next) {
	res.send(req.files);
	/*req.files has the information regarding the file you are uploading...
	from the total information, i am just using the path and the imageName to store in the mongo collection(table)
	*/
	var path = req.files[0].path;
	var imageName = req.files[0].originalname;

	var imagepath = {};
	imagepath['path'] = path;
	imagepath['originalname'] = imageName;

	//imagepath contains two objects, path and the imageName

	//we are passing two objects in the addImage method.. which is defined above..
	router.addImage(imagepath, function (err) {

	});

});


router.get('/', (req, res) => {
	res.send({
		message: 'holla, yall'
	})
})

module.exports = router
