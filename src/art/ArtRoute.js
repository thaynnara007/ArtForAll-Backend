const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const art = require('./Art');
const controller = require('./ArtController');


router.use(bodyParser.json());

router.use(function (req, res, next) { 

	res.setHeader('Content-Type', 'application/json'); 
	next();	
});

router.get('/', controller.getAll); 

router.get('/:name', controller.getOne);

router.post('/', controller.post); 

module.exports = router;